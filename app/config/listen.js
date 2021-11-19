module.exports = function (app, port) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}