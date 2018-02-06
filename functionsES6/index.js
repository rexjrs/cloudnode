import * as functions from 'firebase-functions'
import express from 'express'
import WelcomeController from './controllers/WelcomeController'

const welcome = WelcomeController.index(express(), functions)

export {
  welcome,
}
