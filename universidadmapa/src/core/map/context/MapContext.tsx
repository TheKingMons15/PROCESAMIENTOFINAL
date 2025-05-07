import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Building, GeoCoordinate, MapEvent, MapEventType } from '@/types';

interface MapContextType {
  buildings: Building[];
  highlightedBuilding: Building | null;
  selectedBuilding: Building | null;
  mapCenter: GeoCoordinate;
  mapZoom: number;
  setBuildings: (buildings: Building[]) => void;
  setMapCenter: (center: GeoCoordinate) => void;
  setMapZoom: (zoom: number) => void;
  handleMapEvent: (event: MapEvent) => void;
  highlightBuilding: (buildingId: string | null) => void;
  selectBuilding: (buildingId: string | null) => void;
  getBuildingById: (buildingId: string) => Building | undefined;
}

const defaultMapCenter: GeoCoordinate = { lat: 0, lng: 0 };
const defaultMapZoom = 17;

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [highlightedBuilding, setHighlightedBuilding] = useState<Building | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [mapCenter, setMapCenter] = useState<GeoCoordinate>(defaultMapCenter);
  const [mapZoom, setMapZoom] = useState<number>(defaultMapZoom);

  const getBuildingById = useCallback(
    (buildingId: string) => buildings.find((b) => b.id === buildingId),
    [buildings]
  );

  const highlightBuilding = useCallback(
    (buildingId: string | null) => {
      if (!buildingId) {
        setHighlightedBuilding(null);
        return;
      }

      const building = getBuildingById(buildingId);
      if (building) {
        setHighlightedBuilding(building);
      }
    },
    [getBuildingById]
  );

  const selectBuilding = useCallback(
    (buildingId: string | null) => {
      if (!buildingId) {
        setSelectedBuilding(null);
        return;
      }

      const building = getBuildingById(buildingId);
      if (building) {
        setSelectedBuilding(building);
        // Al seleccionar un edificio, centramos el mapa en él
        setMapCenter(building.center);
      }
    },
    [getBuildingById]
  );

  const handleMapEvent = useCallback(
    (event: MapEvent) => {
      switch (event.type) {
        case MapEventType.HOVER:
          if (event.buildingId) {
            highlightBuilding(event.buildingId);
          }
          break;
        case MapEventType.LEAVE:
          // Solo quitamos el resaltado si no hay un edificio seleccionado
          if (!selectedBuilding) {
            setHighlightedBuilding(null);
          }
          break;
        case MapEventType.CLICK:
          if (event.buildingId) {
            selectBuilding(event.buildingId);
          } else {
            // Clic fuera de un edificio, deseleccionamos
            setSelectedBuilding(null);
            setHighlightedBuilding(null);
          }
          break;
        default:
          break;
      }
    },
    [highlightBuilding, selectBuilding, selectedBuilding]
  );

  return (
    <MapContext.Provider
      value={{
        buildings,
        highlightedBuilding,
        selectedBuilding,
        mapCenter,
        mapZoom,
        setBuildings,
        setMapCenter,
        setMapZoom,
        handleMapEvent,
        highlightBuilding,
        selectBuilding,
        getBuildingById,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMap = (): MapContextType => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};