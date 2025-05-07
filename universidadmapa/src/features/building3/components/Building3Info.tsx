import React, { useEffect, useState } from 'react';
import { Building3 } from '@/types';
import { getBuilding3FullInfo } from '../services/buildingData';

interface Building3InfoProps {
  buildingId: string;
}

const Building3Info: React.FC<Building3InfoProps> = ({ buildingId }) => {
  const [buildingData, setBuildingData] = useState<Building3 | null>(null);
  const [activeTab, setActiveTab] = useState<'academic' | 'leveling'>('academic');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // En un caso real, aquí podrías hacer una llamada a una API
    // Para este ejemplo, simplemente usamos los datos estáticos
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulamos una carga asíncrona
        await new Promise(resolve => setTimeout(resolve, 300));
        const data = getBuilding3FullInfo();
        setBuildingData(data);
      } catch (error) {
        console.error('Error fetching building data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [buildingId]);

  if (loading) {
    return (
      <div className="slider-loading">
        <div className="spinner"></div>
        <p>Cargando información...</p>
      </div>
    );
  }

  if (!buildingData) {
    return <div className="slider-error">No se pudo cargar la información del edificio.</div>;
  }

  return (
    <div className="building-info">
      <div className="building-header">
        <h3>{buildingData.name}</h3>
        <p>{buildingData.description}</p>
      </div>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          Centros Académicos
        </button>
        <button
          className={`tab-btn ${activeTab === 'leveling' ? 'active' : ''}`}
          onClick={() => setActiveTab('leveling')}
        >
          Centros de Nivelación
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'academic' ? (
          <div className="academic-centers">
            <h4>Centros Académicos</h4>
            {buildingData.academicCenters.map(center => (
              <div key={center.id} className="slider-item">
                <h5 className="slider-item-title">{center.name}</h5>
                <p>{center.description}</p>
                <div className="center-details">
                  <p><strong>Ubicación:</strong> {center.location}</p>
                  <p><strong>Horario:</strong> {center.schedule}</p>
                  <p><strong>Contacto:</strong> {center.contactInfo}</p>
                </div>
                <div className="center-services">
                  <h6>Servicios:</h6>
                  <ul>
                    {center.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="leveling-centers">
            <h4>Centros de Nivelación</h4>
            {buildingData.levelingCenters.map(center => (
              <div key={center.id} className="slider-item">
                <h5 className="slider-item-title">{center.name}</h5>
                <p>{center.description}</p>
                <div className="center-details">
                  <p><strong>Ubicación:</strong> {center.location}</p>
                  <p><strong>Horario:</strong> {center.schedule}</p>
                </div>
                <div className="center-subjects">
                  <h6>Materias:</h6>
                  <ul>
                    {center.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Building3Info;