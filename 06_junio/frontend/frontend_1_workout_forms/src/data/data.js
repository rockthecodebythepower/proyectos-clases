export const workouts = [
  {
    requisitos: {
      peso: 60,
      altura: 170,
      objetivo: "perder peso",
      edad: 30,
      nivel: "intermedio",
    },
    duracion: 1800, // 30 minutos en segundos
    ejercicios: [
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/encogimientos-init-pos-6692.png",
        nombre: "Abdominales",
        repeticiones: 20,
        musculosImplicados: ["Recto abdominal", "Oblicuos"],
      },
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/media-sentadilla-con-mancuerna-init-pos-8619.png",
        nombre: "Sentadillas",
        repeticiones: 15,
        musculosImplicados: ["Cuádriceps", "Glúteos", "Isquiotibiales"],
      },
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/flexiones-de-brazos-con-rodillas-apoyadas-init-pos-5420.png",
        nombre: "Flexiones de brazos",
        repeticiones: 10,
        musculosImplicados: ["Pectorales", "Tríceps", "Deltoides"],
      },
    ],
  },
  {
    requisitos: {
      peso: 70,
      altura: 180,
      objetivo: "ganar masa muscular",
      edad: 25,
      nivel: "avanzado",
    },
    duracion: 2700, // 45 minutos en segundos
    ejercicios: [
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/peso-muerto-con-barra-tradicional-init-pos-4394.png",
        nombre: "Peso muerto",
        repeticiones: 8,
        musculosImplicados: ["Espalda baja", "Isquiotibiales", "Glúteos"],
      },
      {
        imagen: "https://www.workoutsprograms.com/uploads/exercise/dominadas-de-pie-en-maquina-asistida-init-pos-1273.png",
        nombre: "Pull-ups",
        repeticiones: 12,
        musculosImplicados: ["Pectorales", "Tríceps", "Deltoides"],
      },
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/zancada-con-mancuernas-init-pos-2989.png",
        nombre: "Zancadas",
        repeticiones: 10,
        musculosImplicados: ["Cuádriceps", "Glúteos", "Isquiotibiales"],
      },
    ],
  },
  {
    requisitos: {
      peso: 65,
      altura: 165,
      objetivo: "mantenerse en forma",
      edad: 40,
      nivel: "principiante",
    },
    duracion: 2400, // 40 minutos en segundos
    ejercicios: [
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/plancha-flexion-brazos-init-pos-7783.png",
        nombre: "Plancha",
        tiempo: 60,
        musculosImplicados: ["Abdominales", "Deltoides", "Core"],
      },
      {
        imagen: "https://www.workoutsprograms.com/uploads/exercise/tijeras-o-saltos-abriendo-y-cerrando-piernas-simultaneamente--init-pos-2074.png",
        nombre: "Jumping Jacks",
        repeticiones: 20,
        musculosImplicados: ["Piernas", "Glúteos", "Hombros"],
      },
      {
        imagen: "https://www.entrenamientos.com/uploads/exercise/curl-de-biceps-con-barra-en-z-de-pie--init-pos-9988.png",
        nombre: "Biceps con barra",
        repeticiones: 12,
        musculosImplicados: ["Biceps", "Braquioradial"],
      },
    ],
  },
];
