export default class WelcomeController {
    static index(app, functions) {
        const api = app.get("*", (request, response) => {
            response.send(
                "Hello from Express on Firebase with CORS! No trailing '/' required!"
            )
        })
        return functions.https.onRequest((request, response) => {
            if (!request.path) {
              request.url = `/${request.url}` // prepend '/' to keep query params if any
            }
            return api(request, response)
          })
    }
}