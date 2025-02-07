const {
  Category,
  Role,
  User,
  Product,
  Article,
  Novelty,
  Course,
  Career,
  Cohort,
} = require('../models')
const { isObjectId } = require('./validate-object-id')

/**
 * Validación contra la BD de usuarios
 */
const isValidRole = async (role = '') => {
  const existsRole = await Role.findOne({ role })
  if (!existsRole) {
    throw new Error(`El rol ${role} no está registrado en la base de datos`)
  }
}

const emailExists = async (email = '') => {
  const user = await User.findOne({ email })
  if (user) {
    throw new Error(`El correo '${email}' ya está registrado`)
  }
}

const userByIdExists = async (id = '') => {
  const userExists = await User.findById(id)
  if (!userExists) {
    throw new Error(`Usuario con id '${id}' no existe en la base de datos`)
  }
}

/**
 * Validación contra la BD de categorías
 */
const categoryByIdExists = async (id = '') => {
  const categoryExists = await Category.findById(id)
  if (!categoryExists) {
    throw new Error(`Categoría con id '${id}' no existe en la base de datos`)
  }
}

/**
 * Validar contra la BD de artículos
 */

const careerByIdExists = async (id = '') => {
  const careerExists = await Career.findById(id)
  if (!careerExists) {
    throw new Error(`La carrera con id '${id}' no existe en la base de datos `)
  }
}

/**
 * Validación contra la BD de productos
 */
const productByIdExists = async (id = '') => {
  const productExists = await Product.findById(id)
  if (!productExists) {
    throw new Error(`Producto con id '${id}' no existe en la base de datos`)
  }
}

/**
 *  Validar colecciones permitidas
 */
const allowedCollections = (collection = '', collections = []) => {
  const include = collections.includes(collection)
  if (!include)
    throw new Error(
      `La colección ${collection} no es permitida. Colecciones permitidas: ${collections.join(
        ', '
      )}`
    )
  return true
}

/**
 * Validaciones contra la BD de noticias
 */
const noveltytByIdExists = async (id = '') => {
  const noveltyExists = await Novelty.findById(id)
  if (!noveltyExists) {
    throw new Error(`Noticia con id '${id}' no existe en la base de datos`)
  }
}

/**
 * Validar contra la BD de artículos
 */
const articleByIdExists = async (id = '') => {
  const articleExists = await Article.findById(id)
  if (!articleExists) {
    throw new Error(`Artículo con id '${id}' no existe en la base de datos `)
  }
}

const courseByIdExists = async (id = '') => {
  const courseExists = await Course.findById(id)
  if (!courseExists) {
    throw new Error(`Curso con id '${id}' no existe en la base de datos`)
  }
}

const cohortByIdExists = async (id = '') => {
  const cohortExists = await Cohort.findById(id)
  if (!cohortExists) {
    throw new Error(`La cohorte con id '${id}' no existe en la base de datos`)
  }
}

module.exports = {
  isValidRole,
  emailExists,
  userByIdExists,
  categoryByIdExists,
  productByIdExists,
  allowedCollections,
  careerByIdExists,
  noveltytByIdExists,
  articleByIdExists,
  courseByIdExists,
  cohortByIdExists
}
