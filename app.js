const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const expressHbs = require('express-handlebars')

const chatRouter = require('./routes/chat')

const app = express()

// view engine setup
app.set(
	'views'
	,path.join(__dirname, 'views')
)

app.engine(
	'.hbs'
	,expressHbs(
		{
			defaultLayout: 'layout'
			,extname: '.hbs'
		}
	)
)
app.set(
	'view engine'
	,'.hbs'
)

app.use(
	'/javascripts'
	,express.static(
		path.join(
			__dirname
			,'public'
			,'javascripts'
		)
	)
)

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routers
app.use('/', chatRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
