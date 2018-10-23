# APP DDS

## Ajustar
Copiar el archivo `env.example.ts` ubicado en la carpeta `~/src` pegarlo en la misma ubicación y cambiar el nombre a `env.ts`.

> La posición `endpoint` recibe la **URI** base de la **API**.

##En caso de errores
Si al correr la aplicación presenta problemas con los plugins, ejecutar los siguientes comandos

```
ionic cordova plugin add call-number
npm install --save @ionic-native/call-number

ionic cordova plugin add cordova-plugin-x-socialsharing
npm install --save @ionic-native/social-sharing
```
