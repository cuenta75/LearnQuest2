"use client"

import { useState, useEffect } from "react"
import CourseContentSection from "@/components/module/course-content-section"
import CourseDetailSidebar from "@/components/module/course-detail-sidebar"
import { BookOpen, Code, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ModuleDetailPage({ params }: { params: { id: string } }) {
  const { id: courseId } = params
  const [hasModuleStarted, setHasModuleStarted] = useState(false)
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null)

  // Simulate fetching course data based on courseId
  const getCourseData = (id: string) => {
    switch (id) {
      case "react-typescript-advanced":
        return {
          id: "react-typescript-advanced",
          title: "React & TypeScript Avanzado",
          description:
            "Domina React con TypeScript para crear aplicaciones web modernas y escalables, explorando patrones avanzados, rendimiento y testing.",
          imageUrl: "/course-react-typescript.png",
          instructor: {
            name: "Dr. Carlos Mendoza",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Ingeniero de Software Principal en GlobalDev",
          },
          rating: 4.9,
          duration: "4 semanas",
          price: 0,
          studentsEnrolled: 18000,
          requirements: [
            "Conocimientos intermedios de React y JavaScript.",
            "Familiaridad con TypeScript básico.",
            "Acceso a un editor de código y navegador web.",
          ],
          whatYouWillLearn: [
            "Patrones de diseño avanzados en React (render props, HOCs, custom hooks).",
            "Gestión de estado compleja con Context API y Redux/Zustand.",
            "Optimización de rendimiento en aplicaciones React.",
            "Integración profunda de TypeScript para aplicaciones robustas.",
            "Testing de componentes y aplicaciones React (Jest, React Testing Library).",
            "Despliegue y buenas prácticas en producción.",
          ],
          modules: [
            {
              id: "1",
              title: "Patrones Avanzados de React",
              description: "Explora técnicas avanzadas para construir componentes reutilizables y flexibles.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Render Props y Higher-Order Components (HOCs)",
                  videoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Creación de Custom Hooks para lógica reutilizable",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Los Custom Hooks son una de las características más poderosas introducidas con React Hooks, permitiendo extraer lógica de componentes en funciones reutilizables. Un custom hook es simplemente una función JavaScript cuyo nombre comienza con 'use' y que puede llamar a otros hooks. Su principal ventaja es que permiten compartir lógica con estado entre componentes sin la necesidad de patrones más complejos como HOCs o Render Props, haciendo el código más limpio y fácil de entender.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Por ejemplo, si tienes varios componentes que necesitan manejar la lógica de un contador, en lugar de duplicar `useState` y `useEffect` en cada uno, puedes crear un `useCounter` hook. Este hook encapsularía la lógica del contador y devolvería el estado actual y las funciones para incrementarlo/decrementarlo. Los componentes simplemente llamarían a `useCounter()` y usarían los valores devueltos, manteniendo su código enfocado en la UI.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "La convención de nombrar los hooks con 'use' es crucial para que React pueda aplicar sus reglas de hooks (como llamar hooks solo en la parte superior de un componente de función o de otro hook). Los custom hooks no son una nueva característica de React en sí, sino una convención que aprovecha las capacidades de los hooks existentes para mejorar la reutilización del código.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Patrones Avanzados",
                  question: "¿Cuál es la principal ventaja de los Custom Hooks?",
                  options: [
                    { id: "a", text: "Permiten renderizar componentes más rápido." },
                    { id: "b", text: "Facilitan la reutilización de lógica con estado entre componentes." },
                    { id: "c", text: "Reemplazan completamente a los componentes de clase." },
                    { id: "d", text: "Son una alternativa a Redux para la gestión de estado global." },
                  ],
                  correctAnswerId: "b",
                  explanation:
                    "Los Custom Hooks permiten extraer y reutilizar lógica con estado entre diferentes componentes de función, haciendo el código más modular y DRY (Don't Repeat Yourself).",
                },
              ],
            },
            {
              id: "2",
              title: "Gestión de Estado Compleja y Context API",
              description: "Maneja el estado de tu aplicación de forma eficiente y escalable.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Uso avanzado de Context API para estado global",
                  videoUrl: "https://www.youtube.com/embed/lhjK1c_2_2Q",
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Introducción a Redux y Zustand para aplicaciones grandes",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Para aplicaciones React de gran escala, la gestión de estado puede volverse compleja rápidamente. Aunque Context API es excelente para pasar datos a través del árbol de componentes sin props drilling, no está optimizado para la gestión de estado compleja con muchas actualizaciones o lógica asíncrona. Aquí es donde entran en juego librerías como Redux y Zustand.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Redux** es una librería predecible de gestión de estado para aplicaciones JavaScript. Sigue un patrón de 'single source of truth' (una única fuente de verdad) para el estado de la aplicación, almacenándolo en un 'store' central. Las actualizaciones de estado se realizan a través de 'acciones' que son procesadas por 'reducers' (funciones puras que toman el estado actual y una acción, y devuelven un nuevo estado). Redux es conocido por su estricta arquitectura y su potente ecosistema de herramientas de desarrollo, lo que lo hace ideal para aplicaciones con requisitos de estado muy complejos y depuración avanzada.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Zustand** es una alternativa más ligera y sencilla a Redux. Se describe como una 'solución de gestión de estado pequeña, rápida y escalable'. A diferencia de Redux, Zustand no requiere una configuración compleja ni el uso de 'reducers' o 'acciones' explícitas. Permite crear stores de forma más directa y reactiva, lo que lo hace muy atractivo para proyectos donde se busca simplicidad y rendimiento sin sacrificar la escalabilidad. Es una excelente opción para proyectos de tamaño mediano a grande que no necesitan la sobrecarga de Redux.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "La elección entre Redux, Zustand o incluso Context API depende de la complejidad de tu aplicación, el tamaño de tu equipo y tus preferencias de desarrollo. Cada uno ofrece diferentes niveles de abstracción y control sobre el estado.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de Gestión de Estado",
                  question:
                    "¿Cuál de las siguientes librerías de gestión de estado es conocida por su simplicidad y ligereza?",
                  options: [
                    { id: "a", text: "Redux" },
                    { id: "b", text: "MobX" },
                    { id: "c", text: "Zustand" },
                    { id: "d", text: "Recoil" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Zustand es una librería de gestión de estado conocida por su enfoque minimalista y su facilidad de uso, siendo una alternativa más ligera a Redux.",
                },
              ],
            },
            {
              id: "3",
              title: "Optimización de Rendimiento y Testing",
              description: "Asegura que tus aplicaciones React sean rápidas y libres de errores.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Técnicas de optimización de rendimiento en React",
                  videoUrl: "https://www.youtube.com/embed/D_J4841J_2Q",
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "Testing de componentes con Jest y React Testing Library",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "El testing es una parte fundamental del desarrollo de software moderno, y las aplicaciones React no son una excepción. Asegurarse de que tus componentes funcionen como se espera y que los cambios futuros no introduzcan regresiones es crucial para mantener la calidad del código y la confianza en tu aplicación. Las herramientas más populares para testing en React son Jest y React Testing Library.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Jest** es un framework de testing de JavaScript desarrollado por Facebook, ideal para probar componentes React. Proporciona un entorno de pruebas completo, incluyendo un ejecutor de pruebas, un framework de aserciones y un sistema de mocking. Jest es rápido, fácil de configurar y viene con características como la cobertura de código y la instantánea (snapshot) testing, que permite comparar la salida de un componente con una instantánea guardada para detectar cambios inesperados en la UI.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**React Testing Library (RTL)** es una librería complementaria a Jest que se enfoca en probar los componentes de React de una manera que se asemeja más a cómo un usuario interactuaría con ellos. Su filosofía es 'cuanto más se parezcan tus pruebas a la forma en que tus usuarios usan tu software, más confianza te darán'. RTL no se preocupa por los detalles de implementación interna de los componentes, sino por el comportamiento visible para el usuario. Esto fomenta pruebas más robustas que no se rompen fácilmente con refactorizaciones internas.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Combinar Jest como ejecutor de pruebas y RTL para escribir las pruebas de tus componentes React te permite crear un conjunto de pruebas sólido que valida tanto la lógica interna como la experiencia del usuario, asegurando la calidad y estabilidad de tu aplicación.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de Rendimiento y Testing",
                  question:
                    "¿Qué librería de testing se enfoca en probar los componentes de React de una manera que se asemeja a la interacción del usuario?",
                  options: [
                    { id: "a", text: "Jest" },
                    { id: "b", text: "Enzyme" },
                    { id: "c", text: "Cypress" },
                    { id: "d", text: "React Testing Library" },
                  ],
                  correctAnswerId: "d",
                  explanation:
                    "React Testing Library se enfoca en probar el comportamiento de los componentes desde la perspectiva del usuario, interactuando con el DOM de la misma manera que lo haría un usuario real.",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: Aplicación de Gestión de Tareas",
              description: "Aplica tus conocimientos avanzados de React y TypeScript en un proyecto completo.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Construye una Aplicación de Gestión de Tareas con React y TypeScript",
                  instructions:
                    "Desarrolla una aplicación web completa para la gestión de tareas. Debe incluir funcionalidades como añadir, editar, eliminar y marcar tareas como completadas. Implementa gestión de estado con Context API o Zustand, y asegúrate de usar TypeScript de forma rigurosa. Incluye al menos 3 componentes con custom hooks y pruebas unitarias básicas.",
                  criteria: [
                    "Uso efectivo de TypeScript para tipado seguro.",
                    "Implementación de gestión de estado avanzada.",
                    "Creación y uso de al menos 3 custom hooks.",
                    "Pruebas unitarias para componentes clave.",
                    "Interfaz de usuario intuitiva y responsiva.",
                    "Código limpio y bien estructurado.",
                  ],
                },
              ],
            },
          ],
        }
      case "nodejs-apis-rest":
        return {
          id: "nodejs-apis-rest",
          title: "Node.js & APIs REST",
          description:
            "Construye APIs robustas y escalables con Node.js, Express y las mejores prácticas de diseño RESTful.",
          imageUrl: "/nodejs-apis-course.png",
          instructor: {
            name: "Ing. Ana Rodríguez",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Desarrolladora Backend Senior en TechSolutions",
          },
          rating: 4.7,
          duration: "5 semanas",
          price: 150,
          studentsEnrolled: 9500,
          requirements: [
            "Conocimientos básicos de JavaScript.",
            "Familiaridad con conceptos de desarrollo web.",
            "Acceso a un editor de código y terminal.",
          ],
          whatYouWillLearn: [
            "Fundamentos de Node.js y npm.",
            "Creación de servidores web con Express.js.",
            "Diseño y desarrollo de APIs RESTful.",
            "Integración con bases de datos (MongoDB/PostgreSQL).",
            "Autenticación y autorización con JWT.",
            "Manejo de errores y validación de datos.",
            "Despliegue de aplicaciones Node.js.",
          ],
          modules: [
            {
              id: "1",
              title: "Introducción a Node.js y Express",
              description: "Configura tu entorno y crea tu primer servidor web.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Qué es Node.js y por qué usarlo para APIs",
                  videoUrl: "https://www.youtube.com/embed/RLC_J4841J_2Q",
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Configuración de un proyecto Express básico",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Express.js es un framework de aplicación web minimalista y flexible de Node.js que proporciona un conjunto robusto de características para desarrollar aplicaciones web y APIs. Es el framework más popular para Node.js y es la base de muchas aplicaciones backend modernas. Configurar un proyecto Express básico es el primer paso para construir tu API RESTful.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Para empezar, necesitas inicializar un nuevo proyecto Node.js con `npm init` y luego instalar Express con `npm install express`. Una vez instalado, puedes crear un archivo principal (ej. `app.js` o `server.js`) donde importarás Express y configurarás tu aplicación. Un servidor Express básico implica crear una instancia de la aplicación, definir rutas para manejar diferentes solicitudes HTTP (GET, POST, PUT, DELETE) y luego hacer que la aplicación 'escuche' en un puerto específico.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Por ejemplo, puedes definir una ruta GET para la raíz (`/`) que responda con un simple mensaje '¡Hola Mundo!'. También puedes configurar middleware para procesar solicitudes, como `express.json()` para analizar cuerpos de solicitud JSON. La simplicidad y flexibilidad de Express lo hacen ideal para empezar rápidamente y escalar a medida que tu API crece.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Node.js y Express",
                  question: "¿Cuál es el comando para instalar Express.js en un proyecto Node.js?",
                  options: [
                    { id: "a", text: "npm add express" },
                    { id: "b", text: "npm install express" },
                    { id: "c", text: "node install express" },
                    { id: "d", text: "express init" },
                  ],
                  correctAnswerId: "b",
                  explanation: "El comando correcto para instalar Express.js es `npm install express`.",
                },
              ],
            },
            {
              id: "2",
              title: "Diseño y Desarrollo de APIs RESTful",
              description: "Aprende los principios REST y cómo aplicarlos en tus APIs.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Principios de diseño REST y recursos",
                  videoUrl: "https://www.youtube.com/embed/X_J4841J_2Q",
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Implementación de CRUD con Express",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Las operaciones CRUD (Create, Read, Update, Delete) son los pilares de cualquier API RESTful, representando las funciones básicas que se pueden realizar sobre los recursos de una aplicación. Implementar CRUD con Express implica definir rutas para cada una de estas operaciones, utilizando los métodos HTTP correspondientes (POST para Create, GET para Read, PUT/PATCH para Update, DELETE para Delete).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Para la operación **Create (POST)**, se define una ruta que recibe datos en el cuerpo de la solicitud y los utiliza para crear un nuevo recurso. Por ejemplo, `/api/productos` para añadir un nuevo producto. La respuesta típicamente incluye el recurso recién creado y un código de estado 201 (Created).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Para **Read (GET)**, se definen rutas para obtener uno o varios recursos. `/api/productos` podría devolver todos los productos, mientras que `/api/productos/:id` devolvería un producto específico por su ID. La respuesta es el recurso(s) solicitado(s) y un código 200 (OK).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Para **Update (PUT/PATCH)**, se utiliza una ruta con el ID del recurso (ej. `/api/productos/:id`) para modificar un recurso existente. PUT reemplaza el recurso completo, mientras que PATCH actualiza parcialmente. La respuesta suele ser el recurso actualizado y un código 200 (OK).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Finalmente, para **Delete (DELETE)**, se define una ruta con el ID del recurso (ej. `/api/productos/:id`) para eliminarlo. La respuesta puede ser un código 204 (No Content) si la eliminación fue exitosa y no hay contenido que devolver.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "La implementación de estas operaciones es fundamental para construir una API RESTful funcional y bien estructurada, permitiendo a los clientes interactuar con los datos de manera predecible.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de APIs RESTful",
                  question: "¿Qué método HTTP se utiliza para crear un nuevo recurso en una API RESTful?",
                  options: [
                    { id: "a", text: "GET" },
                    { id: "b", text: "PUT" },
                    { id: "c", text: "POST" },
                    { id: "d", text: "DELETE" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "El método HTTP POST se utiliza para enviar datos y crear un nuevo recurso en el servidor.",
                },
              ],
            },
            {
              id: "3",
              title: "Autenticación y Bases de Datos",
              description: "Integra bases de datos y asegura tu API con autenticación.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Conexión a MongoDB con Mongoose",
                  videoUrl: "https://www.youtube.com/embed/Y_J4841J_2Q",
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "Implementación de autenticación JWT",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "La autenticación es un componente crítico de cualquier API que maneje datos sensibles. JSON Web Tokens (JWT) son un estándar popular para crear tokens de acceso que permiten a los usuarios acceder a recursos protegidos de forma segura y sin estado. Un JWT es una cadena compacta y segura de URL que representa un conjunto de reclamaciones (claims) que pueden ser verificadas por el servidor.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "El proceso de autenticación con JWT generalmente sigue estos pasos: un usuario envía sus credenciales (nombre de usuario y contraseña) al servidor. Si las credenciales son válidas, el servidor crea un JWT que contiene información sobre el usuario (ej. ID de usuario, roles) y lo firma con una clave secreta. Este token se envía de vuelta al cliente.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "En solicitudes posteriores a recursos protegidos, el cliente incluye el JWT en el encabezado de autorización (Bearer Token). El servidor verifica la firma del token para asegurar que no ha sido alterado y extrae la información del usuario para autorizar el acceso. La naturaleza sin estado de los JWT los hace ideales para APIs RESTful, ya que el servidor no necesita mantener sesiones de usuario.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Para implementar JWT en Node.js, se suelen usar librerías como `jsonwebtoken` para crear y verificar tokens, y `bcrypt` para hashear contraseñas de forma segura antes de almacenarlas en la base de datos. Es fundamental proteger la clave secreta utilizada para firmar los tokens, ya que su compromiso podría permitir la falsificación de tokens.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de Autenticación",
                  question: "¿Qué librería se usa comúnmente en Node.js para hashear contraseñas de forma segura?",
                  options: [
                    { id: "a", text: "jsonwebtoken" },
                    { id: "b", text: "express-validator" },
                    { id: "c", text: "bcrypt" },
                    { id: "d", text: "passport.js" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Bcrypt es una librería popular para hashear contraseñas de forma segura, lo que es crucial para proteger la información de los usuarios en una base de datos.",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: API de Blog",
              description: "Construye una API RESTful completa para un blog.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Desarrolla una API RESTful para un Blog",
                  instructions:
                    "Crea una API RESTful completa para un sistema de blog. Debe permitir la gestión de usuarios (registro, login), posts (crear, leer, actualizar, eliminar) y comentarios. Implementa autenticación JWT para proteger las rutas de creación, actualización y eliminación. Utiliza una base de datos (MongoDB o PostgreSQL) para persistir los datos.",
                  criteria: [
                    "Implementación de todas las operaciones CRUD para posts y comentarios.",
                    "Autenticación JWT funcional para usuarios.",
                    "Manejo de errores adecuado y validación de datos.",
                    "Estructura de proyecto modular y escalable.",
                    "Conexión y uso efectivo de la base de datos.",
                    "Documentación básica de la API (ej. con Postman o Swagger).",
                  ],
                },
              ],
            },
          ],
        }
      case "devops-docker":
        return {
          id: "devops-docker",
          title: "DevOps con Docker",
          description:
            "Aprende los fundamentos de DevOps y domina la containerización de aplicaciones con Docker y Docker Compose.",
          imageUrl: "/devops-docker-course.png",
          instructor: {
            name: "Ing. Roberto Silva",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Ingeniero DevOps Senior en SecureNet",
          },
          rating: 4.6,
          duration: "4 semanas",
          price: 200,
          studentsEnrolled: 7000,
          requirements: [
            "Conocimientos básicos de sistemas operativos (Linux/Windows).",
            "Familiaridad con la línea de comandos.",
            "Acceso a una computadora con Docker instalado.",
          ],
          whatYouWillLearn: [
            "Conceptos fundamentales de DevOps.",
            "Introducción a la containerización y Docker.",
            "Creación de Dockerfiles y construcción de imágenes.",
            "Gestión de contenedores Docker.",
            "Orquestación de múltiples contenedores con Docker Compose.",
            "Volúmenes y redes en Docker.",
            "Introducción a Kubernetes (conceptos básicos).",
          ],
          modules: [
            {
              id: "1",
              title: "Introducción a DevOps y Docker",
              description: "Entiende la filosofía DevOps y los conceptos básicos de Docker.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Qué es DevOps y su importancia",
                  videoUrl: "https://www.youtube.com/embed/Y_J4841J_2Q",
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Conceptos clave de Docker: Imágenes, Contenedores, Registros",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Docker ha revolucionado la forma en que desarrollamos, empaquetamos y desplegamos aplicaciones. Para entender Docker, es fundamental comprender sus tres conceptos principales: Imágenes, Contenedores y Registros.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Una **Imagen Docker** es una plantilla de solo lectura que contiene todo lo necesario para ejecutar una aplicación: el código, un runtime, librerías, variables de entorno y archivos de configuración. Las imágenes son inmutables y se construyen a partir de un `Dockerfile`, que es un script con instrucciones para crear la imagen. Piensa en una imagen como una 'clase' en programación orientada a objetos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Un **Contenedor Docker** es una instancia ejecutable de una imagen. Cuando ejecutas una imagen, se crea un contenedor. Los contenedores son ligeros, portátiles y aislados del sistema operativo anfitrión y de otros contenedores. Cada contenedor tiene su propio sistema de archivos, red y procesos. Son como 'objetos' creados a partir de la 'clase' (imagen). Puedes iniciar, detener, mover o eliminar contenedores fácilmente.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Un **Registro Docker** (como Docker Hub) es un repositorio centralizado para almacenar y compartir imágenes Docker. Puedes subir tus propias imágenes personalizadas a un registro o descargar imágenes públicas o privadas creadas por otros. Esto facilita la colaboración y el despliegue de aplicaciones, ya que las imágenes pueden ser fácilmente distribuidas y utilizadas en diferentes entornos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Comprender estos conceptos es el primer paso para aprovechar el poder de Docker para la containerización de tus aplicaciones.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Docker Básico",
                  question: "¿Qué es una instancia ejecutable de una imagen Docker?",
                  options: [
                    { id: "a", text: "Un Dockerfile" },
                    { id: "b", text: "Un Registro" },
                    { id: "c", text: "Un Contenedor" },
                    { id: "d", text: "Un Volumen" },
                  ],
                  correctAnswerId: "c",
                  explanation: "Un Contenedor Docker es una instancia en ejecución de una imagen Docker.",
                },
              ],
            },
            {
              id: "2",
              title: "Docker Compose y Redes",
              description: "Orquesta múltiples contenedores y gestiona la comunicación entre ellos.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Introducción a Docker Compose para aplicaciones multi-contenedor",
                  videoUrl: "https://www.youtube.com/embed/X_J4841J_2Q",
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Configuración de redes y volúmenes en Docker",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "En el mundo real, las aplicaciones rara vez consisten en un solo contenedor. A menudo, una aplicación moderna se compone de varios servicios (ej. un frontend, un backend, una base de datos) que necesitan comunicarse entre sí. Docker Compose es una herramienta que te permite definir y ejecutar aplicaciones Docker multi-contenedor.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Docker Compose** utiliza un archivo YAML (típicamente `docker-compose.yml`) para configurar los servicios de tu aplicación. En este archivo, defines cada servicio (qué imagen usar, qué puertos mapear, qué volúmenes montar, etc.), las redes que los conectan y los volúmenes para la persistencia de datos. Con un solo comando (`docker-compose up`), puedes levantar toda tu aplicación con todos sus servicios interconectados.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Las **redes en Docker** permiten la comunicación entre contenedores. Docker crea una red por defecto para los servicios definidos en un `docker-compose.yml`, permitiendo que los contenedores se comuniquen entre sí usando los nombres de los servicios como nombres de host. También puedes definir redes personalizadas para un control más granular sobre el aislamiento y la comunicación.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los **volúmenes en Docker** son la forma preferida de persistir datos generados y utilizados por los contenedores. A diferencia de los datos almacenados dentro de la capa escribible de un contenedor (que se pierden cuando el contenedor se elimina), los volúmenes se almacenan en el sistema de archivos del host y pueden ser montados en uno o más contenedores. Esto es crucial para bases de datos, logs y cualquier dato que necesite sobrevivir al ciclo de vida de un contenedor.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Dominar Docker Compose, las redes y los volúmenes te permite construir y gestionar entornos de desarrollo y producción complejos de manera eficiente y reproducible.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de Docker Compose",
                  question: "¿Qué tipo de archivo se utiliza para definir servicios en Docker Compose?",
                  options: [
                    { id: "a", text: "JSON" },
                    { id: "b", text: "XML" },
                    { id: "c", text: "YAML" },
                    { id: "d", text: "TXT" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Docker Compose utiliza archivos YAML (`docker-compose.yml`) para definir la configuración de los servicios de una aplicación multi-contenedor.",
                },
              ],
            },
            {
              id: "3",
              title: "Introducción a Kubernetes",
              description: "Explora los conceptos básicos de orquestación de contenedores a gran escala.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Conceptos clave de Kubernetes: Pods, Deployments, Services",
                  videoUrl: "https://www.youtube.com/embed/Y_J4841J_2Q",
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "Despliegue de aplicaciones con Kubernetes",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Mientras Docker Compose es excelente para entornos de desarrollo y aplicaciones de pequeña escala, para orquestar contenedores a gran escala en producción, se necesita una herramienta más robusta: Kubernetes. Kubernetes es una plataforma de código abierto para automatizar el despliegue, escalado y gestión de aplicaciones containerizadas.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los componentes fundamentales de Kubernetes incluyen: **Pods**, que son la unidad más pequeña desplegable en Kubernetes y contienen uno o más contenedores; **Deployments**, que gestionan el despliegue y escalado de un conjunto de Pods; y **Services**, que definen una forma lógica de acceder a un conjunto de Pods, proporcionando un punto de entrada estable para la comunicación.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Desplegar una aplicación en Kubernetes implica escribir archivos de configuración YAML que describen el estado deseado de tu aplicación (cuántos Pods quieres, qué imágenes usar, cómo exponerlos, etc.). El 'control plane' de Kubernetes se encarga de asegurar que el estado actual del clúster coincida con el estado deseado. Esto incluye la programación de Pods en nodos, el monitoreo de su salud y el reinicio automático de Pods fallidos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Kubernetes ofrece características avanzadas como autoescalado, balanceo de carga, descubrimiento de servicios, gestión de secretos y configuración, y actualizaciones continuas sin tiempo de inactividad. Aunque tiene una curva de aprendizaje más pronunciada que Docker Compose, su poder y flexibilidad lo han convertido en el estándar de facto para la orquestación de contenedores en la nube y en entornos empresariales.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de Kubernetes",
                  question: "¿Cuál es la unidad más pequeña desplegable en Kubernetes?",
                  options: [
                    { id: "a", text: "Un Contenedor" },
                    { id: "b", text: "Un Nodo" },
                    { id: "c", text: "Un Pod" },
                    { id: "d", text: "Un Servicio" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Un Pod es la unidad más pequeña y básica que se puede crear y desplegar en Kubernetes, y puede contener uno o más contenedores.",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: Despliegue de una Aplicación Web",
              description: "Containeriza y despliega una aplicación web con Docker y Docker Compose.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Containeriza y Despliega una Aplicación Web con Docker Compose",
                  instructions:
                    "Toma una aplicación web simple (ej. un frontend React y un backend Node.js/Express) y containerízala usando Docker. Luego, crea un archivo `docker-compose.yml` para orquestar ambos servicios, incluyendo una base de datos (ej. MongoDB o PostgreSQL) como un tercer servicio. Asegúrate de que los servicios puedan comunicarse entre sí y que los datos de la base de datos persistan usando volúmenes.",
                  criteria: [
                    "Creación de Dockerfiles correctos para frontend y backend.",
                    "Configuración de `docker-compose.yml` para los tres servicios.",
                    "Comunicación exitosa entre frontend, backend y base de datos.",
                    "Persistencia de datos de la base de datos mediante volúmenes.",
                    "La aplicación debe ser accesible y funcional después del despliegue.",
                    "Código y configuración limpios y bien documentados.",
                  ],
                },
              ],
            },
          ],
        }
      case "blockchain-solidity":
        return {
          id: "blockchain-solidity",
          title: "Desarrollo Blockchain con Solidity",
          description:
            "Aprende a construir contratos inteligentes y aplicaciones descentralizadas (DApps) en la blockchain de Ethereum usando Solidity.",
          imageUrl: "/blockchain-dev.png",
          instructor: {
            name: "Dr. Elena Vargas",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Investigadora Blockchain en AI Innovators",
          },
          rating: 4.8,
          duration: "7 semanas",
          price: 300,
          studentsEnrolled: 5000,
          requirements: [
            "Conocimientos básicos de programación (preferiblemente JavaScript).",
            "Comprensión de conceptos básicos de blockchain.",
            "Acceso a un entorno de desarrollo (ej. Remix, Truffle).",
          ],
          whatYouWillLearn: [
            "Fundamentos de Blockchain y Ethereum.",
            "Programación de contratos inteligentes con Solidity.",
            "Desarrollo de DApps con Web3.js/Ethers.js.",
            "Manejo de eventos y almacenamiento de datos en la blockchain.",
            "Seguridad en contratos inteligentes.",
            "Despliegue y pruebas de contratos en redes de prueba.",
          ],
          modules: [
            {
              id: "1",
              title: "Fundamentos de Blockchain y Ethereum",
              description: "Entiende cómo funciona la tecnología blockchain y la plataforma Ethereum.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Qué es Blockchain y cómo funciona",
                  videoUrl: "https://www.youtube.com/embed/Y_J4841J_2Q",
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Introducción a Ethereum y Smart Contracts",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Ethereum es una plataforma descentralizada de código abierto que permite la creación y ejecución de contratos inteligentes y aplicaciones descentralizadas (DApps). A diferencia de Bitcoin, que se centra principalmente en transacciones de criptomonedas, Ethereum es una 'computadora mundial' programable que puede ejecutar cualquier tipo de aplicación.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "El corazón de Ethereum son los **Contratos Inteligentes**. Estos son programas auto-ejecutables almacenados en la blockchain. Una vez desplegados, se ejecutan exactamente como fueron programados, sin posibilidad de censura, fraude o interferencia de terceros. Los contratos inteligentes permiten automatizar acuerdos y procesos sin necesidad de intermediarios, lo que abre un vasto abanico de posibilidades para la innovación.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Cada operación en Ethereum (ej. enviar Ether, ejecutar un contrato inteligente) requiere 'gas', que es una unidad de medida del esfuerzo computacional. El gas se paga con Ether, la criptomoneda nativa de Ethereum. Esto incentiva a los mineros a procesar transacciones y protege la red de ataques de spam.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Ethereum ha sido pionero en el espacio de las DApps, DeFi (Finanzas Descentralizadas) y NFTs (Tokens No Fungibles), demostrando el potencial de una internet descentralizada. Comprender sus fundamentos es esencial para cualquier desarrollador que quiera construir en la Web3.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Ethereum",
                  question: "¿Cuál es la criptomoneda nativa de la blockchain de Ethereum?",
                  options: [
                    { id: "a", text: "Bitcoin" },
                    { id: "b", text: "Litecoin" },
                    { id: "c", text: "Ether" },
                    { id: "d", text: "Ripple" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Ether (ETH) es la criptomoneda nativa de la red Ethereum, utilizada para pagar las tarifas de transacción (gas).",
                },
              ],
            },
            {
              id: "2",
              title: "Programación de Contratos Inteligentes con Solidity",
              description: "Aprende el lenguaje de programación para contratos inteligentes de Ethereum.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Sintaxis básica de Solidity y tipos de datos",
                  videoUrl: "https://www.youtube.com/embed/X_J4841J_2Q",
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Funciones, eventos y almacenamiento de datos en Solidity",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Solidity es un lenguaje de programación orientado a objetos, de alto nivel, diseñado específicamente para implementar contratos inteligentes en varias plataformas blockchain, especialmente Ethereum. Su sintaxis es similar a JavaScript, lo que lo hace relativamente accesible para desarrolladores web.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "En Solidity, los contratos inteligentes se definen como 'contratos'. Dentro de un contrato, puedes declarar **variables de estado** (datos que se almacenan permanentemente en la blockchain), **funciones** (lógica que interactúa con el estado y realiza operaciones), y **eventos** (una forma de registrar acciones en la blockchain que pueden ser escuchadas por aplicaciones externas).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Las **funciones** pueden ser `public`, `private`, `internal` o `external`, controlando su visibilidad y accesibilidad. También pueden ser `view` (solo leen el estado, no lo modifican) o `pure` (no leen ni modifican el estado). Las funciones que modifican el estado requieren una transacción y, por lo tanto, gas.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los **eventos** son cruciales para la comunicación entre los contratos inteligentes y las aplicaciones frontend (DApps). Cuando un evento es emitido por un contrato, se registra en la blockchain y las aplicaciones pueden 'escuchar' estos eventos para actualizar su UI o realizar otras acciones. Esto es mucho más eficiente que leer el estado directamente de la blockchain constantemente.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "El almacenamiento de datos en la blockchain es costoso, por lo que Solidity ofrece tipos de datos eficientes y estructuras como `mapping` (similar a un diccionario) y `struct` (para definir tipos de datos complejos). Comprender cómo almacenar y acceder a los datos de manera eficiente es clave para escribir contratos inteligentes optimizados y seguros.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de Solidity",
                  question:
                    "¿Qué palabra clave se usa en Solidity para declarar una variable que solo puede ser leída, pero no modificada, por una función?",
                  options: [
                    { id: "a", text: "payable" },
                    { id: "b", text: "pure" },
                    { id: "c", text: "view" },
                    { id: "d", text: "constant" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "La palabra clave `view` se utiliza para funciones que solo leen el estado de la blockchain y no lo modifican. `pure` se usa para funciones que no leen ni modifican el estado.",
                },
              ],
            },
            {
              id: "3",
              title: "Desarrollo de DApps y Web3.js",
              description: "Conecta tu frontend con contratos inteligentes y crea aplicaciones descentralizadas.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Conectando tu DApp con MetaMask y Web3.js",
                  videoUrl: "https://www.youtube.com/embed/Y_J4841J_2Q",
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "Interacción con contratos inteligentes desde el frontend",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Una Aplicación Descentralizada (DApp) es una aplicación que se ejecuta en una red P2P (peer-to-peer) de computadoras en lugar de un servidor centralizado. En el contexto de Ethereum, una DApp típicamente consiste en un frontend (ej. React, Vue) y uno o más contratos inteligentes desplegados en la blockchain.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Para que tu frontend pueda interactuar con los contratos inteligentes en la blockchain, necesitas una librería JavaScript como **Web3.js** o **Ethers.js**. Estas librerías actúan como una interfaz entre tu aplicación web y el nodo de Ethereum. Permiten a tu DApp: conectarse a una billetera (como MetaMask) para que el usuario pueda firmar transacciones, leer datos de los contratos inteligentes y enviar transacciones para modificar su estado.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "El proceso general para interactuar con un contrato inteligente desde el frontend es el siguiente: primero, se inicializa una instancia de Web3.js (o Ethers.js) conectada a un proveedor de Ethereum (ej. MetaMask). Luego, se carga el contrato inteligente utilizando su ABI (Application Binary Interface, que describe las funciones y eventos del contrato) y su dirección en la blockchain. Una vez cargado, puedes llamar a las funciones `view`/`pure` del contrato para leer datos (sin costo de gas) o enviar transacciones para ejecutar funciones que modifican el estado (requiriendo gas y la firma del usuario).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Manejar los eventos emitidos por los contratos inteligentes es también una parte crucial del desarrollo de DApps, ya que permite a tu frontend reaccionar a los cambios en la blockchain en tiempo real sin tener que consultar el estado constantemente.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de DApps",
                  question:
                    "¿Qué librería JavaScript se usa para interactuar con la blockchain de Ethereum desde una DApp?",
                  options: [
                    { id: "a", text: "React.js" },
                    { id: "b", text: "Node.js" },
                    { id: "c", text: "Web3.js" },
                    { id: "d", text: "Express.js" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Web3.js (y Ethers.js) son las librerías JavaScript estándar para interactuar con la blockchain de Ethereum desde aplicaciones web (DApps).",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: DApp de Votación",
              description: "Construye una aplicación descentralizada de votación en Ethereum.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Desarrolla una DApp de Votación en Ethereum",
                  instructions:
                    "Crea una DApp de votación simple. Debe incluir un contrato inteligente en Solidity que permita a un administrador crear propuestas de votación y a los usuarios votar por ellas. El frontend (ej. React) debe conectarse a MetaMask, mostrar las propuestas activas y permitir a los usuarios emitir sus votos. Asegúrate de que los votos sean inmutables y que solo se pueda votar una vez por propuesta.",
                  criteria: [
                    "Contrato inteligente de votación funcional en Solidity.",
                    "Frontend que se conecta a MetaMask y muestra el estado de la votación.",
                    "Capacidad para que los usuarios voten y vean los resultados.",
                    "Manejo de eventos para actualizaciones en tiempo real.",
                    "Despliegue del contrato en una red de prueba (ej. Sepolia).",
                    "Código limpio y bien comentado.",
                  ],
                },
              ],
            },
          ],
        }
      case "python-data-science":
        return {
          id: "python-data-science",
          title: "Python Data Science",
          description:
            "Domina el análisis de datos, machine learning y visualización con Python, utilizando librerías como Pandas, NumPy y Scikit-learn.",
          imageUrl: "/data-science-course.png",
          instructor: {
            name: "Dr. Miguel Torres",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Científico de Datos Senior en DataInsights",
          },
          rating: 4.7,
          duration: "6 semanas",
          price: 0,
          studentsEnrolled: 12000,
          requirements: [
            "Conocimientos básicos de programación en Python.",
            "Acceso a una computadora con conexión a internet.",
            "Ganas de aprender sobre datos y estadísticas.",
          ],
          whatYouWillLearn: [
            "Fundamentos de Python para Data Science.",
            "Manipulación de datos con Pandas.",
            "Análisis numérico con NumPy.",
            "Visualización de datos con Matplotlib y Seaborn.",
            "Introducción al Machine Learning con Scikit-learn.",
            "Preprocesamiento de datos y feature engineering.",
          ],
          modules: [
            {
              id: "1",
              title: "Introducción a Python para Data Science",
              description: "Configuración del entorno y repaso de conceptos clave de Python.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Configuración del entorno de desarrollo (Anaconda)",
                  videoUrl: "https://www.youtube.com/embed/Y_J4841J_2Q", // Example YouTube URL
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Repaso de estructuras de datos en Python",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Antes de sumergirnos en el análisis de datos, es fundamental tener un buen dominio de las estructuras de datos básicas de Python. Estas estructuras son los bloques de construcción sobre los que se manipulan y organizan los datos. Las más comunes incluyen listas, tuplas, diccionarios y conjuntos. Cada una tiene sus propias características y casos de uso óptimos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Las **listas** son colecciones ordenadas y mutables de elementos. Pueden contener elementos de diferentes tipos de datos y son ideales para almacenar secuencias de datos que pueden cambiar. Por ejemplo, una lista de temperaturas diarias o una lista de nombres de estudiantes. Su flexibilidad las hace muy versátiles para la mayoría de las tareas de manipulación de datos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Las **tuplas** son similares a las listas, pero son inmutables, lo que significa que una vez creadas, sus elementos no pueden ser modificados. Son útiles para datos que no deben cambiar, como coordenadas geográficas o registros de bases de datos. Su inmutabilidad las hace más eficientes en ciertos contextos y seguras para pasar como argumentos a funciones.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los **diccionarios** son colecciones no ordenadas de pares clave-valor. Cada clave debe ser única y se utiliza para acceder a su valor asociado. Son extremadamente eficientes para buscar, insertar y eliminar elementos, lo que los hace perfectos para representar datos estructurados, como la información de un usuario (nombre, edad, email) o configuraciones. Son la base de muchas estructuras de datos más complejas en librerías de Data Science.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Finalmente, los **conjuntos** son colecciones no ordenadas de elementos únicos. Son útiles para operaciones matemáticas de conjuntos como uniones, intersecciones y diferencias, y para eliminar duplicados de una lista. Aunque menos usados directamente en el análisis de datos que listas o diccionarios, son herramientas poderosas para la limpieza y preparación de datos.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Fundamentos de Python",
                  question: "¿Qué estructura de datos de Python es inmutable?",
                  options: [
                    { id: "a", text: "Lista" },
                    { id: "b", text: "Diccionario" },
                    { id: "c", text: "Tupla" },
                    { id: "d", text: "Conjunto" },
                  ],
                  correctAnswerId: "c",
                  explanation: "Las tuplas son colecciones ordenadas e inmutables de elementos.",
                },
              ],
            },
            {
              id: "2",
              title: "Manipulación de Datos con Pandas",
              description: "Aprende a cargar, limpiar y transformar datos con la librería Pandas.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Introducción a DataFrames y Series",
                  videoUrl: "https://www.youtube.com/embed/vmEHWLw442Q", // Example YouTube URL
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Limpieza y preprocesamiento de datos",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "La limpieza y el preprocesamiento de datos son pasos críticos en cualquier proyecto de Data Science. Los datos del mundo real rara vez están limpios y listos para el análisis; a menudo contienen valores faltantes, duplicados, errores de formato y valores atípicos. Ignorar estos problemas puede llevar a análisis incorrectos y modelos de machine learning sesgados.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Manejo de valores faltantes**: Los valores faltantes (NaN en Pandas) son comunes. Se pueden manejar de varias maneras: eliminando filas o columnas con valores faltantes (útil si hay muchos faltantes o si la cantidad de datos es grande), o imputando los valores faltantes con la media, mediana, moda o incluso modelos predictivos. La elección depende de la naturaleza de los datos y del impacto en el análisis.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Eliminación de duplicados**: Los registros duplicados pueden sesgar los resultados. Pandas ofrece métodos sencillos para identificar y eliminar filas duplicadas basándose en todas las columnas o en un subconjunto específico de ellas. Es importante decidir si un duplicado es un error o una ocurrencia válida en el contexto de los datos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Corrección de errores de formato**: Los datos pueden venir en formatos inconsistentes (ej. fechas como cadenas, números con comas en lugar de puntos). Convertir los tipos de datos a los formatos correctos (numérico, fecha/hora, categórico) es esencial para realizar operaciones y análisis adecuados. Esto a menudo implica el uso de funciones de conversión de tipos y expresiones regulares.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Manejo de valores atípicos (Outliers)**: Los valores atípicos son observaciones que se desvían significativamente de otras observaciones. Pueden ser errores de entrada de datos o eventos raros pero válidos. Se pueden identificar utilizando métodos estadísticos (ej. IQR, Z-score) o visualizaciones (box plots). El manejo puede implicar eliminarlos, transformarlos o tratarlos de manera especial, dependiendo de su causa y efecto en el análisis.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Un buen preprocesamiento de datos sienta las bases para un análisis robusto y modelos predictivos precisos, maximizando el valor que se puede extraer de los datos.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de Pandas",
                  question: "¿Qué función de Pandas se usa para leer un archivo CSV?",
                  options: [
                    { id: "a", text: "pd.read_excel()" },
                    { id: "b", text: "pd.read_csv()" },
                    { id: "c", text: "pd.load_data()" },
                    { id: "d", text: "pd.import_text()" },
                  ],
                  correctAnswerId: "b",
                  explanation:
                    "La función `pd.read_csv()` se utiliza para leer datos de un archivo CSV en un DataFrame de Pandas.",
                },
              ],
            },
            {
              id: "3",
              title: "Visualización de Datos con Matplotlib y Seaborn",
              description: "Crea gráficos informativos y atractivos para comunicar tus hallazgos.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Tipos de gráficos comunes y cuándo usarlos",
                  videoUrl: "https://www.youtube.com/embed/F_J4841J_2Q", // Example YouTube URL
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "Personalización y mejora de visualizaciones",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Una visualización de datos efectiva no solo presenta información, sino que también cuenta una historia y facilita la comprensión. Matplotlib y Seaborn son librerías de Python que ofrecen un control excepcional sobre la apariencia de tus gráficos, permitiéndote personalizarlos para maximizar su impacto y claridad.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Personalización de elementos básicos**: Puedes ajustar los títulos de los ejes, las etiquetas, los límites de los ejes, los colores de las líneas y barras, y los marcadores. Por ejemplo, `plt.xlabel('Eje X')`, `plt.ylabel('Eje Y')`, `plt.title('Mi Gráfico')` son funciones básicas de Matplotlib para añadir contexto. Seaborn, construido sobre Matplotlib, simplifica la creación de gráficos estéticamente agradables con menos código.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Estilos y temas**: Seaborn viene con varios temas predefinidos (`sns.set_style()`) que cambian la apariencia general de los gráficos, como 'darkgrid', 'whitegrid', 'dark', 'white' y 'ticks'. También puedes usar paletas de colores (`sns.color_palette()`) para asegurar que tus gráficos sean visualmente atractivos y accesibles. La elección de la paleta de colores es crucial para la legibilidad y para transmitir la información correctamente (ej. paletas secuenciales para datos ordenados, divergentes para datos con un punto medio).",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Anotaciones y texto**: Añadir texto directamente a los gráficos (`plt.text()`, `ax.annotate()`) puede resaltar puntos de datos importantes o explicar tendencias. Las leyendas (`plt.legend()`) son esenciales cuando se muestran múltiples series de datos, y su ubicación puede ser optimizada para no obstruir los datos.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "**Subplots y múltiples gráficos**: Para comparar diferentes aspectos de tus datos, puedes crear múltiples gráficos en una sola figura utilizando `plt.subplots()` o las funciones de rejilla de Seaborn. Esto ayuda a mantener la coherencia visual y facilita la comparación directa entre diferentes visualizaciones.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "La clave para una buena visualización es la claridad y la simplicidad. Evita el 'chart junk' (elementos innecesarios que distraen) y asegúrate de que tu gráfico comunique el mensaje deseado de manera eficiente.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de Visualización",
                  question: "¿Qué librería se usa comúnmente con Matplotlib para gráficos estadísticos atractivos?",
                  options: [
                    { id: "a", text: "NumPy" },
                    { id: "b", text: "Scikit-learn" },
                    { id: "c", text: "Seaborn" },
                    { id: "d", text: "Pandas" },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Seaborn es una librería de visualización de datos basada en Matplotlib que proporciona una interfaz de alto nivel para dibujar gráficos estadísticos atractivos e informativos.",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: Análisis de Datos de Ventas",
              description: "Aplica todo lo aprendido para analizar un conjunto de datos de ventas.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Análisis Exploratorio de Datos de Ventas",
                  instructions:
                    "Realiza un análisis exploratorio de un conjunto de datos de ventas (puedes usar un dataset público como 'Superstore Sales' o uno simulado). Tu análisis debe incluir: carga y limpieza de datos, estadísticas descriptivas, visualizaciones clave (ej. ventas por región, producto, tiempo) y conclusiones sobre los patrones de ventas.",
                  criteria: [
                    "Carga y limpieza de datos efectiva.",
                    "Uso adecuado de estadísticas descriptivas.",
                    "Creación de al menos 3 visualizaciones relevantes y bien etiquetadas.",
                    "Interpretación clara de los hallazgos.",
                    "Código Python limpio y comentado.",
                  ],
                },
              ],
            },
          ],
        }
      case "ux-ui-design":
        return {
          id: "ux-ui-design",
          title: "Diseño UX/UI para Desarrolladores",
          description: "Crea interfaces de usuario intuitivas y experiencias de usuario excepcionales.",
          imageUrl: "/ux-ui-design.png",
          instructor: {
            name: "Lic. Sofía Pérez",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Diseñadora UX/UI Senior en TechSolutions",
          },
          rating: 4.8,
          duration: "4 semanas",
          price: 0,
          studentsEnrolled: 1500,
          requirements: [
            "No se requiere experiencia previa en diseño.",
            "Acceso a una computadora con conexión a internet.",
            "Ganas de aprender y creatividad.",
          ],
          whatYouWillLearn: [
            "Principios de diseño UX/UI.",
            "Investigación de usuarios y creación de personas.",
            "Wireframing y prototipado.",
            "Diseño de interfaces visuales y sistemas de diseño.",
            "Herramientas populares como Figma y Adobe XD.",
            "Cómo realizar pruebas de usabilidad.",
          ],
          modules: [
            {
              id: "1",
              title: "Introducción al UX/UI",
              description: "Conceptos básicos y la importancia del diseño centrado en el usuario.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Qué es UX/UI y por qué es importante",
                  videoUrl: "https://www.youtube.com/embed/9C_H_J_2_2Q",
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Historia y evolución del diseño UX/UI",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "El diseño de Experiencia de Usuario (UX) y de Interfaz de Usuario (UI) ha recorrido un largo camino desde sus humildes comienzos. En las primeras etapas de la computación, las interfaces eran puramente funcionales, a menudo basadas en texto y comandos. La usabilidad era una preocupación secundaria, y la estética era casi inexistente. Sin embargo, a medida que la tecnología avanzaba, también lo hacía la comprensión de que una buena interacción con el usuario era clave para la adopción y el éxito del software.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Un hito crucial fue la invención del ratón y el desarrollo de las Interfaces Gráficas de Usuario (GUI) en los años 70 y 80, popularizadas por Xerox PARC y luego por Apple y Microsoft. Esto transformó la interacción de comandos complejos a manipulación directa de objetos visuales. La llegada de la World Wide Web en los 90 y la explosión de los dispositivos móviles en el siglo XXI forzaron a los diseñadores a pensar en la interacción en pantallas pequeñas, táctiles y con diversas resoluciones, dando origen a principios como el diseño responsivo y el 'mobile-first'.",
                    },
                    { type: "image", value: "/digital-collaboration.png" },
                    {
                      type: "paragraph",
                      value:
                        "Hoy en día, el diseño UX/UI es una disciplina compleja que abarca psicología cognitiva, investigación de mercado, arquitectura de la información, diseño visual y prototipado. La inteligencia artificial, la realidad aumentada y virtual, y las interfaces de voz están abriendo nuevas fronteras, prometiendo experiencias aún más inmersivas y personalizadas. La evolución continúa, siempre con el objetivo de hacer la tecnología más humana e intuitiva.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Introducción",
                  question: "¿Cuál es la principal diferencia entre UX y UI?",
                  options: [
                    { id: "a", text: "UX se enfoca en la apariencia visual, UI en la interacción." },
                    { id: "b", text: "UX se enfoca en la experiencia del usuario, UI en la interfaz visual." },
                    { id: "c", text: "UX es solo para aplicaciones móviles, UI para web." },
                    { id: "d", text: "No hay diferencia, son lo mismo." },
                  ],
                  correctAnswerId: "b",
                  explanation:
                    "UX (User Experience) se centra en cómo se siente el usuario al interactuar con un producto, mientras que UI (User Interface) se refiere a la parte visual y elementos interactivos del producto.",
                },
              ],
            },
            {
              id: "2",
              title: "Investigación de Usuarios",
              description: "Técnicas para entender a tu audiencia y sus necesidades.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Métodos de investigación de usuarios",
                  videoUrl: "https://www.youtube.com/embed/5C_H_J_2_2Q",
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Creación de Personas y Escenarios",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Las 'personas' son herramientas fundamentales en el diseño UX. No son usuarios reales, sino arquetipos ficticios que representan los diferentes tipos de usuarios que podrían interactuar con tu producto o servicio. Se construyen a partir de datos de investigación cualitativa y cuantitativa, como entrevistas, encuestas, análisis de datos y observaciones. Una persona bien definida incluye datos demográficos, comportamientos, motivaciones, objetivos, frustraciones y habilidades técnicas. El objetivo es humanizar a los usuarios para que el equipo de diseño pueda empatizar con ellos y tomar decisiones informadas que satisfagan sus necesidades reales.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "La creación de personas implica varios pasos: recopilar datos de usuarios, identificar patrones y segmentos de usuarios, desarrollar los arquetipos de personas con nombres, fotos y detalles biográficos, y finalmente, compartirlas con todo el equipo para asegurar una comprensión común del público objetivo. Las personas deben ser documentos vivos que se actualicen a medida que se obtiene más información sobre los usuarios.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los 'escenarios' son narrativas que describen cómo una persona específica interactuaría con tu producto para lograr un objetivo particular. Complementan a las personas al ponerlas en acción. Un escenario típico incluye: la persona involucrada, el contexto (dónde y cuándo ocurre la interacción), el problema o la necesidad que la persona intenta resolver, las acciones que realiza con el producto, y el resultado o la solución. Los escenarios ayudan a visualizar el flujo de usuario, identificar posibles puntos de fricción y asegurar que el diseño aborde las necesidades de la persona en situaciones reales.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Al combinar personas y escenarios, los diseñadores pueden crear una visión holística de la experiencia del usuario, lo que facilita la toma de decisiones de diseño y la comunicación dentro del equipo. Estas herramientas son invaluables para mantener el enfoque en el usuario a lo largo de todo el ciclo de desarrollo del producto.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de Investigación",
                  question: "¿Qué es una 'persona' en el diseño UX?",
                  options: [
                    { id: "a", text: "Un miembro del equipo de diseño." },
                    { id: "b", text: "Una representación ficticia del usuario ideal." },
                    { id: "c", text: "Un tipo de software de diseño." },
                    { id: "d", text: "Un objetivo de negocio." },
                  ],
                  correctAnswerId: "b",
                  explanation:
                    "Una persona es un arquetipo de usuario creado para representar los diferentes tipos de usuarios que podrían usar un servicio, producto, sitio o marca de manera similar.",
                },
              ],
            },
            {
              id: "3",
              title: "Wireframing y Prototipado",
              description: "Diseña la estructura y el flujo de tus interfaces.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Herramientas para wireframing",
                  videoUrl: "https://www.youtube.com/embed/6D_H_J_2_2Q",
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "De bocetos a prototipos interactivos",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "El wireframing y el prototipado son etapas cruciales en el proceso de diseño UX/UI, permitiendo a los diseñadores visualizar y probar ideas antes de invertir tiempo y recursos en el desarrollo completo. Los wireframes son representaciones de baja fidelidad de una interfaz, que se centran en la estructura, el contenido y la jerarquía de la información. Son como el 'esqueleto' de tu diseño, sin preocuparse por los colores, las tipografías o las imágenes finales. Su objetivo principal es definir la disposición de los elementos y el flujo de usuario de manera rápida y económica.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Existen diferentes niveles de fidelidad en los wireframes: los bocetos a mano alzada (muy baja fidelidad) son ideales para explorar ideas rápidamente; los wireframes digitales (baja a media fidelidad) se crean con herramientas de software y son más estructurados; y los mockups (alta fidelidad) ya incorporan elementos visuales y de marca, acercándose al diseño final. La elección de la fidelidad depende de la etapa del proyecto y de lo que se necesita comunicar.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los prototipos, por otro lado, son versiones interactivas de tu diseño que simulan la experiencia del usuario. Permiten a los usuarios hacer clic, deslizar y navegar a través de la interfaz como si fuera el producto real. Los prototipos pueden variar desde baja fidelidad (wireframes interactivos) hasta alta fidelidad (diseños visuales completamente interactivos). Su propósito es probar la usabilidad, validar flujos de usuario y recopilar feedback temprano de los usuarios antes de que se escriba una sola línea de código.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "El proceso de prototipado es iterativo: se crea un prototipo, se prueba con usuarios, se recopila feedback, se realizan mejoras y se repite el ciclo. Herramientas como Figma, Adobe XD y Sketch son ampliamente utilizadas para crear tanto wireframes como prototipos interactivos, facilitando la colaboración y la iteración rápida. Dominar estas técnicas es esencial para construir productos digitales que no solo se vean bien, sino que también sean intuitivos y agradables de usar.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de Prototipado",
                  question: "¿Cuál es el propósito principal de un wireframe?",
                  options: [
                    { id: "a", text: "Definir la paleta de colores." },
                    { id: "b", text: "Establecer la tipografía." },
                    { id: "c", text: "Definir la estructura y el contenido." },
                    { id: "d", text: "Crear animaciones." },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Un wireframe se utiliza para definir la estructura, el contenido y la jerarquía de una página o pantalla, sin preocuparse por los detalles visuales.",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: Diseño de una App",
              description: "Aplica todo lo aprendido en un proyecto práctico.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Diseña tu propia aplicación",
                  instructions:
                    "Diseña una aplicación móvil o web completa (wireframes, prototipos y diseño visual) para resolver un problema específico que identifiques. Debes incluir al menos 5 pantallas principales y un flujo de usuario claro.",
                  criteria: [
                    "Claridad del problema y solución propuesta.",
                    "Calidad del wireframing y prototipado.",
                    "Estética y usabilidad del diseño visual.",
                    "Coherencia en el flujo de usuario.",
                    "Originalidad y creatividad.",
                  ],
                },
              ],
            },
          ],
        }
      default:
        // Default to UX/UI course if ID is not recognized
        return {
          id: "ux-ui-design",
          title: "Diseño UX/UI para Desarrolladores",
          description: "Crea interfaces de usuario intuitivas y experiencias de usuario excepcionales.",
          imageUrl: "/ux-ui-design.png",
          instructor: {
            name: "Lic. Sofía Pérez",
            avatar: "/mentor-ana-rodriguez.png", // Placeholder
            title: "Diseñadora UX/UI Senior en TechSolutions",
          },
          rating: 4.8,
          duration: "4 semanas",
          price: 0,
          studentsEnrolled: 1500,
          requirements: [
            "No se requiere experiencia previa en diseño.",
            "Acceso a una computadora con conexión a internet.",
            "Ganas de aprender y creatividad.",
          ],
          whatYouWillLearn: [
            "Principios de diseño UX/UI.",
            "Investigación de usuarios y creación de personas.",
            "Wireframing y prototipado.",
            "Diseño de interfaces visuales y sistemas de diseño.",
            "Herramientas populares como Figma y Adobe XD.",
            "Cómo realizar pruebas de usabilidad.",
          ],
          modules: [
            {
              id: "1",
              title: "Introducción al UX/UI",
              description: "Conceptos básicos y la importancia del diseño centrado en el usuario.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "1-1",
                  type: "video",
                  title: "Qué es UX/UI y por qué es importante",
                  videoUrl: "https://www.youtube.com/embed/9C_H_J_2_2Q",
                },
                {
                  id: "1-2",
                  type: "reading",
                  title: "Historia y evolución del diseño UX/UI",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "El diseño de Experiencia de Usuario (UX) y de Interfaz de Usuario (UI) ha recorrido un largo camino desde sus humildes comienzos. En las primeras etapas de la computación, las interfaces eran puramente funcionales, a menudo basadas en texto y comandos. La usabilidad era una preocupación secundaria, y la estética era casi inexistente. Sin embargo, a medida que la tecnología avanzaba, también lo hacía la comprensión de que una buena interacción con el usuario era clave para la adopción y el éxito del software.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Un hito crucial fue la invención del ratón y el desarrollo de las Interfaces Gráficas de Usuario (GUI) en los años 70 y 80, popularizadas por Xerox PARC y luego por Apple y Microsoft. Esto transformó la interacción de comandos complejos a manipulación directa de objetos visuales. La llegada de la World Wide Web en los 90 y la explosión de los dispositivos móviles en el siglo XXI forzaron a los diseñadores a pensar en la interacción en pantallas pequeñas, táctiles y con diversas resoluciones, dando origen a principios como el diseño responsivo y el 'mobile-first'.",
                    },
                    { type: "image", value: "/digital-collaboration.png" },
                    {
                      type: "paragraph",
                      value:
                        "Hoy en día, el diseño UX/UI es una disciplina compleja que abarca psicología cognitiva, investigación de mercado, arquitectura de la información, diseño visual y prototipado. La inteligencia artificial, la realidad aumentada y virtual, y las interfaces de voz están abriendo nuevas fronteras, prometiendo experiencias aún más inmersivas y personalizadas. La evolución continúa, siempre con el objetivo de hacer la tecnología más humana e intuitiva.",
                    },
                  ],
                },
                {
                  id: "1-3",
                  type: "challenge",
                  title: "Cuestionario de Introducción",
                  question: "¿Cuál es la principal diferencia entre UX y UI?",
                  options: [
                    { id: "a", text: "UX se enfoca en la apariencia visual, UI en la interacción." },
                    { id: "b", text: "UX se enfoca en la experiencia del usuario, UI en la interfaz visual." },
                    { id: "c", text: "UX es solo para aplicaciones móviles, UI para web." },
                    { id: "d", text: "No hay diferencia, son lo mismo." },
                  ],
                  correctAnswerId: "b",
                  explanation:
                    "UX (User Experience) se centra en cómo se siente el usuario al interactuar con un producto, mientras que UI (User Interface) se refiere a la parte visual y elementos interactivos del producto.",
                },
              ],
            },
            {
              id: "2",
              title: "Investigación de Usuarios",
              description: "Técnicas para entender a tu audiencia y sus necesidades.",
              icon: BookOpen,
              isCompleted: false,
              lessons: [
                {
                  id: "2-1",
                  type: "video",
                  title: "Métodos de investigación de usuarios",
                  videoUrl: "https://www.youtube.com/embed/5C_H_J_2_2Q",
                },
                {
                  id: "2-2",
                  type: "reading",
                  title: "Creación de Personas y Escenarios",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "Las 'personas' son herramientas fundamentales en el diseño UX. No son usuarios reales, sino arquetipos ficticios que representan los diferentes tipos de usuarios que podrían interactuar con tu producto o servicio. Se construyen a partir de datos de investigación cualitativa y cuantitativa, como entrevistas, encuestas, análisis de datos y observaciones. Una persona bien definida incluye datos demográficos, comportamientos, motivaciones, objetivos, frustraciones y habilidades técnicas. El objetivo es humanizar a los usuarios para que el equipo de diseño pueda empatizar con ellos y tomar decisiones informadas que satisfagan sus necesidades reales.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "La creación de personas implica varios pasos: recopilar datos de usuarios, identificar patrones y segmentos de usuarios, desarrollar los arquetipos de personas con nombres, fotos y detalles biográficos, y finalmente, compartirlas con todo el equipo para asegurar una comprensión común del público objetivo. Las personas deben ser documentos vivos que se actualicen a medida que se obtiene más información sobre los usuarios.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los 'escenarios' son narrativas que describen cómo una persona específica interactuaría con tu producto para lograr un objetivo particular. Complementan a las personas al ponerlas en acción. Un escenario típico incluye: la persona involucrada, el contexto (dónde y cuándo ocurre la interacción), el problema o la necesidad que la persona intenta resolver, las acciones que realiza con el producto, y el resultado o la solución. Los escenarios ayudan a visualizar el flujo de usuario, identificar posibles puntos de fricción y asegurar que el diseño aborde las necesidades de la persona en situaciones reales.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Al combinar personas y escenarios, los diseñadores pueden crear una visión holística de la experiencia del usuario, lo que facilita la toma de decisiones de diseño y la comunicación dentro del equipo. Estas herramientas son invaluables para mantener el enfoque en el usuario a lo largo de todo el ciclo de desarrollo del producto.",
                    },
                  ],
                },
                {
                  id: "2-3",
                  type: "challenge",
                  title: "Cuestionario de Investigación",
                  question: "¿Qué es una 'persona' en el diseño UX?",
                  options: [
                    { id: "a", text: "Un miembro del equipo de diseño." },
                    { id: "b", text: "Una representación ficticia del usuario ideal." },
                    { id: "c", text: "Un tipo de software de diseño." },
                    { id: "d", text: "Un objetivo de negocio." },
                  ],
                  correctAnswerId: "b",
                  explanation:
                    "Una persona es un arquetipo de usuario creado para representar los diferentes tipos de usuarios que podrían usar un servicio, producto, sitio o marca de manera similar.",
                },
              ],
            },
            {
              id: "3",
              title: "Wireframing y Prototipado",
              description: "Diseña la estructura y el flujo de tus interfaces.",
              icon: Code,
              isCompleted: false,
              lessons: [
                {
                  id: "3-1",
                  type: "video",
                  title: "Herramientas para wireframing",
                  videoUrl: "https://www.youtube.com/embed/6D_H_J_2_2Q",
                },
                {
                  id: "3-2",
                  type: "reading",
                  title: "De bocetos a prototipos interactivos",
                  content: [
                    {
                      type: "paragraph",
                      value:
                        "El wireframing y el prototipado son etapas cruciales en el proceso de diseño UX/UI, permitiendo a los diseñadores visualizar y probar ideas antes de invertir tiempo y recursos en el desarrollo completo. Los wireframes son representaciones de baja fidelidad de una interfaz, que se centran en la estructura, el contenido y la jerarquía de la información. Son como el 'esqueleto' de tu diseño, sin preocuparse por los colores, las tipografías o las imágenes finales. Su objetivo principal es definir la disposición de los elementos y el flujo de usuario de manera rápida y económica.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Existen diferentes niveles de fidelidad en los wireframes: los bocetos a mano alzada (muy baja fidelidad) son ideales para explorar ideas rápidamente; los wireframes digitales (baja a media fidelidad) se crean con herramientas de software y son más estructurados; y los mockups (alta fidelidad) ya incorporan elementos visuales y de marca, acercándose al diseño final. La elección de la fidelidad depende de la etapa del proyecto y de lo que se necesita comunicar.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "Los prototipos, por otro lado, son versiones interactivas de tu diseño que simulan la experiencia del usuario. Permiten a los usuarios hacer clic, deslizar y navegar a través de la interfaz como si fuera el producto real. Los prototipos pueden variar desde baja fidelidad (wireframes interactivos) hasta alta fidelidad (diseños visuales completamente interactivos). Su propósito es probar la usabilidad, validar flujos de usuario y recopilar feedback temprano de los usuarios antes de que se escriba una sola línea de código.",
                    },
                    {
                      type: "paragraph",
                      value:
                        "El proceso de prototipado es iterativo: se crea un prototipo, se prueba con usuarios, se recopila feedback, se realizan mejoras y se repite el ciclo. Herramientas como Figma, Adobe XD y Sketch son ampliamente utilizadas para crear tanto wireframes como prototipos interactivos, facilitando la colaboración y la iteración rápida. Dominar estas técnicas es esencial para construir productos digitales que no solo se vean bien, sino que también sean intuitivos y agradables de usar.",
                    },
                  ],
                },
                {
                  id: "3-3",
                  type: "challenge",
                  title: "Cuestionario de Prototipado",
                  question: "¿Cuál es el propósito principal de un wireframe?",
                  options: [
                    { id: "a", text: "Definir la paleta de colores." },
                    { id: "b", text: "Establecer la tipografía." },
                    { id: "c", text: "Definir la estructura y el contenido." },
                    { id: "d", text: "Crear animaciones." },
                  ],
                  correctAnswerId: "c",
                  explanation:
                    "Un wireframe se utiliza para definir la estructura, el contenido y la jerarquía de una página o pantalla, sin preocuparse por los detalles visuales.",
                },
              ],
            },
            {
              id: "4",
              title: "Proyecto Final: Diseño de una App",
              description: "Aplica todo lo aprendido en un proyecto práctico.",
              icon: Award,
              isCompleted: false,
              lessons: [
                {
                  id: "4-1",
                  type: "sandbox",
                  title: "Diseña tu propia aplicación",
                  instructions:
                    "Diseña una aplicación móvil o web completa (wireframes, prototipos y diseño visual) para resolver un problema específico que identifiques. Debes incluir al menos 5 pantallas principales y un flujo de usuario claro.",
                  criteria: [
                    "Claridad del problema y solución propuesta.",
                    "Calidad del wireframing y prototipado.",
                    "Estética y usabilidad del diseño visual.",
                    "Coherencia en el flujo de usuario.",
                    "Originalidad y creatividad.",
                  ],
                },
              ],
            },
          ],
        }
    }
  }

  const courseData = getCourseData(courseId)

  // Determine if module has started and the current lesson ID for "Continuar Módulo"
  useEffect(() => {
    const savedProgress = localStorage.getItem(`course-${courseId}-progress`)
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress)
      setHasModuleStarted(progressData.hasStarted)
      setCurrentLessonId(progressData.currentLessonId)
    } else {
      // If no progress, set initial state
      setHasModuleStarted(false)
      setCurrentLessonId(courseData.modules[0]?.lessons[0]?.id || null)
    }
  }, [courseId, courseData.modules])

  // Update local storage when module starts
  useEffect(() => {
    if (hasModuleStarted && currentLessonId) {
      localStorage.setItem(
        `course-${courseId}-progress`,
        JSON.stringify({ hasStarted: true, currentLessonId: currentLessonId }),
      )
    }
  }, [hasModuleStarted, currentLessonId, courseId])

  // Find the first lesson ID for the "Empezar/Continuar Módulo" button
  const firstLessonId = courseData.modules[0]?.lessons[0]?.id || ""

  // Flatten all lessons for CourseContentSection and CourseDetailSidebar
  const allLessonsFlattened = courseData.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      type: lesson.type,
      isCompleted: false, // Always false by default as requested
    })),
  )

  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <header className="sticky top-0 z-50 w-full bg-header-blue shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="h-6 w-6 text-white" />
            <Image src="/learnquest-logo-horizontal-white.png" alt="LearnQuest Logo" width={150} height={32} />
            <span className="sr-only">LearnQuest</span>
          </Link>
          <h1 className="text-white text-xl font-semibold">{courseData.title}</h1>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container grid gap-12 px-4 md:grid-cols-[1fr_300px] md:px-6 lg:gap-16">
          <div className="space-y-10">
            <CourseContentSection
              courseId={courseData.id}
              courseTitle={courseData.title}
              courseDescription={courseData.description}
              videoUrl={courseData.modules[0]?.lessons[0]?.videoUrl || ""} // Assuming first lesson is intro video
              videoDuration={courseData.duration}
              whatYouWillLearn={courseData.whatYouWillLearn.join(" ")} // Join for single string
              learningPoints={courseData.whatYouWillLearn}
              curriculumModules={allLessonsFlattened}
              certificationsAndEndorsements={{
                endorsedBy:
                  courseData.id === "python-data-science"
                    ? ["Google", "IBM", "DataInsights"]
                    : ["Meta", "Google", "Microsoft"],
                certificateName: `Certificación de Experto en ${courseData.title}`,
                internationalRecognition:
                  "Este certificado es reconocido por empresas líderes en tecnología a nivel mundial y puede ser verificado digitalmente a través de blockchain.",
              }}
              hasModuleStarted={hasModuleStarted}
              firstLessonId={firstLessonId}
            />
          </div>
          <div className="hidden md:block">
            <CourseDetailSidebar
              courseId={courseData.id}
              instructor={courseData.instructor}
              rating={courseData.rating}
              duration={courseData.duration}
              price={courseData.price}
              studentsEnrolled={courseData.studentsEnrolled}
              requirements={courseData.requirements}
              whatYouWillLearn={courseData.whatYouWillLearn}
              curriculumModules={allLessonsFlattened}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
