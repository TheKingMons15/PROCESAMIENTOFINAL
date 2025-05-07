// Tipos básicos para geolocalización
export interface GeoCoordinate {
    lat: number;
    lng: number;
  }
  
  // Tipos para las áreas del campus
  export enum BuildingType {
    ACADEMIC = 'academic',
    ADMINISTRATIVE = 'administrative',
    LABORATORY = 'laboratory',
    SPORTS = 'sports',
    SERVICES = 'services',
    OTHER = 'other'
  }
  
  // Información básica de un edificio
  export interface Building {
    id: string;
    name: string;
    type: BuildingType;
    description: string;
    coordinates: GeoCoordinate[];  // Polígono que define el edificio
    center: GeoCoordinate;         // Centro para posicionar etiquetas
    color?: string;                // Color personalizado para el edificio
  }
  
  // Información para el slider
  export interface SliderInfo {
    title: string;
    description: string;
    images?: string[];
    additionalContent?: React.ReactNode;
  }
  
  // Tipos para eventos del mapa
  export enum MapEventType {
    CLICK = 'click',
    HOVER = 'hover',
    LEAVE = 'leave'
  }
  
  export interface MapEvent {
    type: MapEventType;
    buildingId?: string;
    coordinates: GeoCoordinate;
    target?: any;
  }
  
  // Tipos para edificios específicos
  
  // Edificio 3 (Tu equipo)
  export interface Building3 extends Building {
    academicCenters: AcademicCenter[];
    levelingCenters: LevelingCenter[];
  }
  
  export interface AcademicCenter {
    id: string;
    name: string;
    description: string;
    location: string; // Ubicación dentro del edificio (ej: "Piso 2, Sala 201")
    services: string[];
    schedule: string;
    contactInfo: string;
  }
  
  export interface LevelingCenter {
    id: string;
    name: string;
    description: string;
    subjects: string[];
    schedule: string;
    location: string;
  }
  
  // Edificio de Posgrado
  export interface PostgraduateBuilding extends Building {
    programs: PostgraduateProgram[];
  }
  
  export interface PostgraduateProgram {
    id: string;
    name: string;
    level: 'master' | 'doctorate' | 'specialization';
    description: string;
    duration: string;
    coordinator: string;
  }
  
  // Centro Deportivo
  export interface SportCenter extends Building {
    facilities: SportFacility[];
    schedule: string;
    events: SportEvent[];
  }
  
  export interface SportFacility {
    id: string;
    name: string;
    sportType: 'football' | 'basketball' | 'volleyball' | 'other';
    capacity: number;
    isIndoor: boolean;
  }
  
  export interface SportEvent {
    id: string;
    name: string;
    date: string;
    facilityId: string;
    description: string;
  }
  
  // Se pueden agregar más tipos específicos para cada edificio según sea necesario