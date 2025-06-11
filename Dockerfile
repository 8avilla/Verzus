# =========================================================================================
# Etapa 1: "builder" - Construye la aplicación
# Aquí instalamos dependencias y generamos la compilación de producción.
# =========================================================================================
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias (usando --force como solicitaste)
# Esto genera la carpeta node_modules
RUN npm i --force

# Copia el resto de los archivos del proyecto (código fuente)
COPY . .

# Construye la aplicación para producción.
# Esto generará las carpetas .next/standalone y .next/static
RUN npm run build

# =========================================================================================
# Etapa 2: "runner" - La imagen final de producción
# Esta es la imagen que se ejecutará en tu servidor. Es mucho más ligera.
# =========================================================================================
FROM node:18-alpine AS runner

WORKDIR /app

# Establece el entorno a producción para optimizar Next.js
ENV NODE_ENV=production
# Deshabilita la telemetría de Next.js (opcional pero recomendado)
ENV NEXT_TELEMETRY_DISABLED 1

# Copia la salida independiente generada por el 'build' desde la etapa anterior
COPY --from=builder /app/.next/standalone ./

# Copia las carpetas 'public' y '.next/static' para servir los activos estáticos
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Expone el puerto 3000 (el puerto por defecto de Next.js)
EXPOSE 3000

# El comando para iniciar la aplicación en modo producción
# Node ejecutará el servidor optimizado desde la carpeta standalone
CMD ["node", "server.js"]