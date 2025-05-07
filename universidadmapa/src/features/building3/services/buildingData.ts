import { Building, Building3, BuildingType } from '@/types';

// Datos del Edificio 3 - Centros Académicos y Nivelación
export const building3Data: Building3 = {
  id: 'building3',
  name: 'Edificio 3 - Centros Académicos y Nivelación',
  type: BuildingType.ACADEMIC,
  description: 'Este edificio alberga los principales centros académicos y programas de nivelación de la universidad. Cuenta con aulas especializadas, salas de estudio y oficinas para docentes tutores.',
  // Las coordenadas son aproximadas y deben ajustarse según el mapa real
  coordinates: [
    { lat: -0.2101, lng: -78.4903 },
    { lat: -0.2103, lng: -78.4901 },
    { lat: -0.2105, lng: -78.4903 },
    { lat: -0.2103, lng: -78.4905 },
  ],
  center: { lat: -0.2103, lng: -78.4903 },
  color: '#27ae60', // Verde principal
  
  // Información específica del Edificio 3
  academicCenters: [
    {
      id: 'ac1',
      name: 'Centro de Idiomas',
      description: 'Centro especializado en la enseñanza de idiomas extranjeros, incluyendo inglés, francés, alemán y mandarín.',
      location: 'Piso 1, Ala Este',
      services: ['Laboratorio de idiomas', 'Asesoría lingüística', 'Certificaciones internacionales'],
      schedule: 'Lunes a Viernes: 08:00 - 20:00, Sábados: 09:00 - 13:00',
      contactInfo: 'idiomas@universidad.edu / Ext. 3120'
    },
    {
      id: 'ac2',
      name: 'Centro de Escritura Académica',
      description: 'Espacio dedicado al desarrollo de habilidades de escritura académica y profesional.',
      location: 'Piso 2, Ala Norte',
      services: ['Tutorías de redacción', 'Revisión de trabajos', 'Talleres de escritura'],
      schedule: 'Lunes a Viernes: 09:00 - 19:00',
      contactInfo: 'escritura@universidad.edu / Ext. 3245'
    },
    {
      id: 'ac3',
      name: 'Centro de Matemáticas',
      description: 'Centro especializado en el apoyo y fortalecimiento de habilidades matemáticas para estudiantes de todas las carreras.',
      location: 'Piso 2, Ala Sur',
      services: ['Tutorías de matemáticas', 'Preparación para exámenes', 'Cursos especializados'],
      schedule: 'Lunes a Viernes: 08:30 - 18:30',
      contactInfo: 'matematicas@universidad.edu / Ext. 3310'
    }
  ],
  
  levelingCenters: [
    {
      id: 'lc1',
      name: 'Programa de Nivelación para Ciencias',
      description: 'Programa diseñado para fortalecer conocimientos básicos en física, química y biología para estudiantes de nuevo ingreso.',
      subjects: ['Física', 'Química', 'Biología'],
      schedule: 'Primer mes de cada semestre, Lunes a Viernes: 07:00 - 09:00',
      location: 'Piso 3, Aulas 301-305'
    },
    {
      id: 'lc2',
      name: 'Programa de Nivelación para Ingenierías',
      description: 'Programa diseñado para fortalecer conocimientos en matemáticas y física para estudiantes de ingenierías.',
      subjects: ['Cálculo', 'Álgebra Lineal', 'Física Aplicada'],
      schedule: 'Primer mes de cada semestre, Lunes a Viernes: 15:00 - 17:00',
      location: 'Piso 3, Aulas 306-310'
    },
    {
      id: 'lc3',
      name: 'Programa de Nivelación para Humanidades',
      description: 'Programa diseñado para fortalecer habilidades de lectura crítica, redacción y análisis para estudiantes de humanidades y ciencias sociales.',
      subjects: ['Comprensión Lectora', 'Redacción Académica', 'Pensamiento Crítico'],
      schedule: 'Primer mes de cada semestre, Lunes a Viernes: 10:00 - 12:00',
      location: 'Piso 1, Aulas 101-105'
    }
  ]
};

// Función para obtener solamente la información básica del edificio
export const getBuilding3BasicInfo = (): Building => {
  const { id, name, type, description, coordinates, center, color } = building3Data;
  return { id, name, type, description, coordinates, center, color };
};

// Función para obtener la información completa del edificio
export const getBuilding3FullInfo = (): Building3 => {
  return building3Data;
};

// Función para obtener información de un centro académico específico
export const getAcademicCenterById = (centerId: string) => {
  return building3Data.academicCenters.find(center => center.id === centerId);
};

// Función para obtener información de un centro de nivelación específico
export const getLevelingCenterById = (centerId: string) => {
  return building3Data.levelingCenters.find(center => center.id === centerId);
};