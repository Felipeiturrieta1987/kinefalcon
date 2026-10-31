/**
 * Service catalogue. Each entry powers both the card on /servicios and the
 * full page at /servicios/[slug], so everything a service page needs lives here.
 */

export type IconKey =
  | "bone"
  | "trophy"
  | "wind"
  | "zap"
  | "waves"
  | "droplets"
  | "hand"
  | "brain"
  | "stethoscope";

export type Service = {
  slug: string;
  name: string;
  /** Short line used on cards and as the page's lead-in. */
  tagline: string;
  /** One sentence for meta descriptions and card bodies. */
  summary: string;
  icon: IconKey;
  /** Featured on the home page grid. */
  featured?: boolean;
  /** Optional photo from the centre, served from /public. */
  image?: { src: string; alt: string };
  /** Opening paragraphs of the service page. */
  intro: string[];
  benefits: string[];
  indications: string[];
  session: { duration: string; frequency: string; modality: string };
  /** Honest caveat shown in a muted box; keeps claims measured. */
  note?: string;
};

export const services: Service[] = [
  {
    slug: "camara-hiperbarica",
    name: "Cámara Hiperbárica",
    tagline: "Oxigenoterapia hiperbárica en cámara rígida clínica",
    summary:
      "Sesiones de oxígeno a presión en cámara rígida profesional, para acelerar la recuperación de tejidos y potenciar el rendimiento.",
    icon: "wind",
    featured: true,
    image: {
      src: "/ig/post-02.jpg",
      alt: "Sala de cámara hiperbárica rígida del centro KineFalcon",
    },
    intro: [
      "La oxigenoterapia hiperbárica consiste en respirar oxígeno a una presión superior a la atmosférica. En esas condiciones, la cantidad de oxígeno disuelto en el plasma aumenta de forma significativa y llega a tejidos donde el flujo sanguíneo está comprometido.",
      "En KineFalcon trabajamos con una cámara rígida de uso clínico, no con una cámara tipo carpa. Eso permite alcanzar una presión terapéutica mayor, con control y monitoreo de los parámetros durante toda la sesión.",
    ],
    benefits: [
      "Mayor disponibilidad de oxígeno en tejidos con irrigación reducida",
      "Apoyo a los procesos naturales de cicatrización y regeneración",
      "Ayuda en el manejo de procesos inflamatorios",
      "Complemento a la recuperación muscular tras esfuerzos intensos",
      "Sesión cómoda y estable, con acompañamiento profesional",
    ],
    indications: [
      "Recuperación post-operatoria",
      "Lesiones deportivas y sobrecarga por entrenamiento",
      "Heridas de cicatrización lenta",
      "Procesos inflamatorios persistentes",
      "Fatiga y recuperación general",
    ],
    session: {
      duration: "60 minutos aprox.",
      frequency: "Según indicación kinésica tras la evaluación",
      modality: "Cámara rígida, modalidad individual o compartida",
    },
    note: "La oxigenoterapia hiperbárica se indica siempre tras una evaluación previa y no reemplaza el tratamiento médico de tu patología de base.",
  },
  {
    slug: "ondas-de-choque",
    name: "Ondas de Choque",
    tagline: "Terapia focalizada para dolor tendinoso persistente",
    summary:
      "Ondas acústicas de alta energía aplicadas sobre el punto exacto de la lesión para estimular la reparación de tendones y partes blandas.",
    icon: "zap",
    featured: true,
    intro: [
      "La terapia por ondas de choque aplica pulsos acústicos de alta energía sobre un punto concreto del tejido. El estímulo mecánico favorece la respuesta biológica de reparación en tendinopatías que llevan tiempo sin resolverse.",
      "Es una de las herramientas que mejor funciona en dolores crónicos de tendón, donde el reposo y los analgésicos ya no están entregando resultados.",
    ],
    benefits: [
      "Tratamiento focalizado sobre el punto de dolor",
      "No requiere incisiones ni reposo prolongado",
      "Estimula la respuesta reparadora del tejido",
      "Se combina bien con ejercicio terapéutico progresivo",
    ],
    indications: [
      "Fascitis plantar y espolón calcáneo",
      "Tendinopatía aquiliana",
      "Epicondilitis (codo de tenista) y epitrocleítis",
      "Tendinopatía del manguito rotador",
      "Síndrome de dolor miofascial con puntos gatillo",
    ],
    session: {
      duration: "20 a 30 minutos",
      frequency: "Habitualmente 1 sesión semanal, en series de 3 a 5",
      modality: "Aplicación focalizada con equipo profesional",
    },
    note: "Durante la aplicación puedes sentir molestia en la zona tratada; la intensidad se regula contigo en tiempo real.",
  },
  {
    slug: "presoterapia",
    name: "Presoterapia",
    tagline: "Compresión secuencial para circulación y recuperación",
    summary:
      "Compresión neumática por cámaras que acompaña el retorno venoso y linfático, muy usada en piernas pesadas y recuperación post-entrenamiento.",
    icon: "waves",
    featured: true,
    intro: [
      "La presoterapia aplica presión de aire de forma secuencial a través de un traje de cámaras. El movimiento va desde la zona distal hacia la proximal, acompañando la dirección natural del retorno venoso y linfático.",
      "Es una sesión cómoda y de bajo impacto. La usamos tanto en recuperación deportiva como en personas que pasan muchas horas de pie o sentadas.",
    ],
    benefits: [
      "Sensación de alivio en piernas cansadas o pesadas",
      "Apoyo al drenaje de líquido retenido",
      "Recuperación muscular tras cargas de entrenamiento",
      "Sesión pasiva, sin esfuerzo ni molestia",
    ],
    indications: [
      "Piernas cansadas, pesadas o hinchadas",
      "Retención de líquidos",
      "Recuperación post-entrenamiento o competencia",
      "Post-operatorio, con indicación profesional",
      "Jornadas laborales prolongadas de pie o sentado",
    ],
    session: {
      duration: "30 a 45 minutos",
      frequency: "De 1 a 3 sesiones semanales según objetivo",
      modality: "Traje de compresión secuencial por cámaras",
    },
  },
  {
    slug: "carboxiterapia",
    name: "Carboxiterapia (ChO₂)",
    tagline: "Microinfiltración de CO₂ médico",
    summary:
      "Aplicación de dióxido de carbono médico bajo la piel para favorecer la microcirculación local en la zona tratada.",
    icon: "droplets",
    featured: true,
    intro: [
      "La carboxiterapia consiste en la administración controlada de dióxido de carbono de uso médico en el tejido subcutáneo. El aumento local de CO₂ provoca una respuesta vasodilatadora que mejora el aporte de oxígeno en la zona.",
      "Se trabaja por sesiones cortas y repetidas, con un protocolo definido para cada caso tras la evaluación inicial.",
    ],
    benefits: [
      "Estímulo de la microcirculación en la zona tratada",
      "Mejor oxigenación local del tejido",
      "Procedimiento ambulatorio, sin tiempo de recuperación",
      "Se integra con otras terapias del centro",
    ],
    indications: [
      "Zonas con circulación local disminuida",
      "Tratamientos de firmeza y calidad de la piel",
      "Apoyo en procesos de recuperación localizada",
    ],
    session: {
      duration: "20 a 30 minutos",
      frequency: "Protocolo por series, definido en la evaluación",
      modality: "Microinfiltración con equipo de CO₂ médico",
    },
    note: "Procedimiento mínimamente invasivo. Se evalúan antecedentes y contraindicaciones antes de la primera sesión.",
  },
  {
    slug: "kinesiologia-traumatologica",
    name: "Kinesiología Traumatológica",
    tagline: "Rehabilitación de lesiones músculo-esqueléticas",
    summary:
      "Recuperación funcional tras esguinces, fracturas, cirugías y lesiones musculares, con un plan progresivo y medible.",
    icon: "bone",
    featured: true,
    intro: [
      "Es la base del centro: devolverte el movimiento, la fuerza y la confianza después de una lesión. Partimos siempre por una evaluación kinésica completa para entender qué estructura está comprometida y en qué fase de recuperación estás.",
      "A partir de ahí armamos un plan progresivo con objetivos claros por etapa, combinando terapia manual, ejercicio terapéutico y la tecnología del centro cuando aporta valor real al caso.",
    ],
    benefits: [
      "Evaluación funcional inicial sin costo",
      "Plan de tratamiento por etapas con objetivos medibles",
      "Terapia manual y ejercicio terapéutico supervisado",
      "Educación para que entiendas tu proceso y evites recaídas",
    ],
    indications: [
      "Post-operatorio traumatológico",
      "Esguinces de tobillo, rodilla y muñeca",
      "Lesiones musculares y tendinosas",
      "Dolor lumbar y cervical mecánico",
      "Rigidez articular y pérdida de rango de movimiento",
    ],
    session: {
      duration: "45 a 60 minutos",
      frequency: "Habitualmente 2 a 3 veces por semana al inicio",
      modality: "Atención individual con kinesiólogo",
    },
  },
  {
    slug: "kinesiologia-deportiva",
    name: "Kinesiología Deportiva",
    tagline: "Prevención, recuperación y retorno a competir",
    summary:
      "Acompañamiento para deportistas: prevención de lesiones, recuperación entre cargas y reintegro deportivo con criterios objetivos.",
    icon: "trophy",
    featured: true,
    intro: [
      "Trabajamos con deportistas amateur y federados, y mantenemos convenios con clubes de la zona. El objetivo no es sólo que dejes de tener dolor: es que vuelvas a competir en condiciones y que no te vuelva a pasar.",
      "El retorno deportivo se define con criterios objetivos de fuerza, control y gesto específico, no sólo por tiempo transcurrido desde la lesión.",
    ],
    benefits: [
      "Evaluación de factores de riesgo de lesión",
      "Trabajo preventivo según tu deporte y posición",
      "Recuperación entre entrenamientos y competencias",
      "Criterios objetivos para el alta deportiva",
      "Convenios vigentes con clubes deportivos",
    ],
    indications: [
      "Lesiones deportivas agudas y por sobrecarga",
      "Reintegro deportivo tras cirugía",
      "Prevención en pretemporada",
      "Recuperación en periodos de alta carga competitiva",
    ],
    session: {
      duration: "45 a 60 minutos",
      frequency: "Según calendario de entrenamiento y competencia",
      modality: "Individual o coordinada con el cuerpo técnico del club",
    },
  },
  {
    slug: "masoterapia",
    name: "Masoterapia",
    tagline: "Masaje terapéutico, descontracturante y drenaje",
    summary:
      "Masaje de relajación, descontracturante y drenaje post-operatorio, aplicado por profesionales con criterio clínico.",
    icon: "hand",
    image: {
      src: "/ig/post-06.jpg",
      alt: "Sesión de masaje terapéutico combinada con cámara hiperbárica en KineFalcon",
    },
    intro: [
      "No todos los masajes buscan lo mismo. Trabajamos tres enfoques distintos: relajación, descontracturante y drenaje post-operatorio, cada uno con técnica y presión diferentes.",
      "La modalidad se define contigo en función de lo que necesitas: bajar tensión acumulada, liberar un punto que duele, o acompañar un post-operatorio.",
    ],
    benefits: [
      "Alivio de tensión y contracturas musculares",
      "Mejor percepción de movilidad y descanso",
      "Apoyo al drenaje en procesos post-quirúrgicos",
      "Se combina con cámara hiperbárica en sesiones extendidas",
    ],
    indications: [
      "Contracturas cervicales, dorsales y lumbares",
      "Estrés y tensión acumulada",
      "Post-operatorio con indicación de drenaje",
      "Recuperación muscular del deportista",
    ],
    session: {
      duration: "60 minutos",
      frequency: "Según necesidad; habitualmente semanal o quincenal",
      modality: "Relajación, descontracturante o drenaje post-operatorio",
    },
  },
  {
    slug: "rehabilitacion-neuromuscular",
    name: "Rehabilitación Neuromuscular",
    tagline: "Control motor, equilibrio y función",
    summary:
      "Recuperación del control del movimiento, el equilibrio y la coordinación en cuadros de origen neurológico o neuromuscular.",
    icon: "brain",
    intro: [
      "Cuando lo afectado no es sólo el músculo sino el control del movimiento, el trabajo cambia. Aquí el foco está en reeducar patrones, recuperar equilibrio y devolver la mayor independencia funcional posible.",
      "Son procesos más largos y muy personales. Trabajamos por objetivos funcionales concretos, acordados contigo y con tu familia cuando corresponde.",
    ],
    benefits: [
      "Reeducación del control motor y la coordinación",
      "Trabajo de equilibrio y prevención de caídas",
      "Objetivos funcionales definidos y revisados periódicamente",
      "Orientación a la familia o cuidador",
    ],
    indications: [
      "Secuelas de accidente cerebrovascular",
      "Alteraciones del equilibrio y la marcha",
      "Debilidad muscular de origen neurológico",
      "Pérdida de independencia funcional",
    ],
    session: {
      duration: "45 a 60 minutos",
      frequency: "2 a 3 veces por semana según el plan",
      modality: "Atención individual con kinesiólogo",
    },
  },
  {
    slug: "kinesiologia-respiratoria",
    name: "Kinesiología Respiratoria",
    tagline: "Permeabilidad de vía aérea y capacidad ventilatoria",
    summary:
      "Kinesioterapia respiratoria para niños y adultos: manejo de secreciones, mecánica ventilatoria y entrenamiento respiratorio.",
    icon: "stethoscope",
    intro: [
      "La kinesioterapia respiratoria ayuda a movilizar y eliminar secreciones, mejorar la mecánica de la respiración y aumentar la tolerancia al esfuerzo.",
      "Atendemos tanto cuadros agudos como procesos crónicos, en población infantil y adulta, con técnicas adaptadas a cada edad y condición.",
    ],
    benefits: [
      "Apoyo a la eliminación de secreciones bronquiales",
      "Mejor mecánica ventilatoria",
      "Entrenamiento de la musculatura respiratoria",
      "Mayor tolerancia a la actividad diaria",
    ],
    indications: [
      "Cuadros respiratorios agudos con secreciones",
      "Enfermedades respiratorias crónicas",
      "Post-operatorio con compromiso ventilatorio",
      "Rehabilitación respiratoria en adulto mayor",
    ],
    session: {
      duration: "30 a 45 minutos",
      frequency: "Según indicación; en cuadros agudos puede ser diaria",
      modality: "Atención individual, técnicas adaptadas por edad",
    },
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
