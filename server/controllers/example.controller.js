class ExampleController {
    static helloWorld (req, res){
        res.status(200).json({
            message: 'Hello my Wolrd'
        })
    }
}

export default ExampleController;
