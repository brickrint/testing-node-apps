// Testing Middleware

// 🐨 you'll need both of these:
import {buildReq, buildRes, buildNext} from 'utils/generate'
import {UnauthorizedError} from 'express-jwt'
import errorMiddleware from '../error-middleware'

// 🐨 Write a test for the UnauthorizedError case
test('reponds with error when response has been sent', () => {
  const error = new Error('some_error')
  const next = buildNext()
  errorMiddleware(error, buildReq(), buildRes({headersSent: true}), next)
  expect(next).toHaveBeenCalledWith(error)
})

test('when error is UnauthorizedError reponds with 401', () => {
  const error = new UnauthorizedError('some_error_code', {
    message: 'Some message',
  })

  const res = buildRes()
  const next = buildNext()
  errorMiddleware(error, buildReq(), res, next)
  expect(res.status).toHaveBeenCalledWith(401)
  expect(res.json).toHaveBeenCalledWith({
    code: 'some_error_code',
    message: 'Some message',
  })
  expect(next).not.toHaveBeenCalled()
})

// 🐨 Write a test for the else case (responds with a 500)
test('when error is not UnauthorizedError reponds with 500', () => {
  const error = new Error('some_error')
  const res = buildRes()
  const next = buildNext()

  errorMiddleware(error, buildReq(), res, next)
  expect(res.status).toHaveBeenCalledWith(500)
  expect(res.json).toHaveBeenCalledWith({
    message: error.message,
    stack: error.stack,
  })
})
