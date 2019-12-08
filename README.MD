# ConfigurENV

Configuration Manager that uses Environment Variables to create your configuration.

## Example

```js
const config=require('configurenv')(
    [
        {
            type: "enum",
            values: ["MYSQL","POSTGRESQL","MSSQL"],
            env: "DRIVER",
            mapping: "driver",
            default: "MYSQL"
        },
        {
            type:"config",
            env: "CONNECTION",
            mapping: "connection",
            config: [
                {
                    type: "string",
                    env: "HOST",
                    mapping: "host",
                    default: "127.0.0.1"
                },
                {
                    type: "int",
                    env: "PORT",
                    mapping: "port",
                    default: 3300
                }
            ]
        }
    ],{
        namespace: "DEMOAPP"
    })
}).build(process.env)

console.log(config.config) //List our config values
console.log(config._cfg) //List the parsed config

```
