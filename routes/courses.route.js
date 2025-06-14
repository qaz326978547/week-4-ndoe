// routes/course.js
const express = require('express')
const multer = require('multer')
const courseController = require('../controllers/course.controller')
const isAuth = require('../middleware/isAuth.middleware')
const handleMiddleware = require('../utils/handleMiddleware')
const { saveCourseSchema } = require('../schema/course.schema')
const router = express.Router()
const validateSchema = require('../middleware/validateSchema.middleware')

// 取得所有課程列表
router.get('/list', courseController.getCourseList)
// 取得單一課程資料
router.get('/:courseId', courseController.getCourse)
router.post('/create/title', ...handleMiddleware([isAuth], courseController.createCourseTitle)) // 新增課程
router.post(
  '/:courseId/save',
  ...handleMiddleware([isAuth, validateSchema(saveCourseSchema)], courseController.saveCourse)
) // 儲存課程資訊

//新增課程類別
router.post(
  '/:courseId/category',
  ...handleMiddleware([isAuth], courseController.createCourseCategory)
)
// 取得課程講義
router.get('/:courseId/handouts', ...handleMiddleware([isAuth], courseController.getCourseHandOuts))

// 取得首頁熱門課程資料
// router.get('/popular', courseController.getPopularCourses)

//取得所有課程, 測試用，塞資料，非正式格式
// router.get('/', courseController.getCourseList)

// //建立新課程, 測試用，塞資料，非正式格式
// router.post('/', courseController.postCourse)

// //取得所有類別, 測試用，塞資料，非正式格式
// router.get('/course-category', courseController.getCategory)

// //建立新類別, 測試用，塞資料，非正式格式
// router.post('/course-category', courseController.postCategory)

// //取得所有評價, 測試用，塞資料，非正式格式
// router.get('/ratings', courseController.getRatings)

// //新增評價, 測試用，塞資料，非正式格式
// router.post('/:courseId/ratings', ...handleMiddleware([isAuth], courseController.postRatings))

// //取得單一課程, 測試用，塞資料，非正式格式
// router.get('/:courseId', courseController.getCourse)

module.exports = router
