import Layout from "../Layout/Layout";
import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Sign from "../Pages/Auth/Sign";
import AllServices from "../Pages/Services/AllServices";
import AddService from "../Pages/Services/AddService";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Blog from "../Pages/Blog/Blog";
import MyReview from "../Pages/Review/MyReview";
import EditReview from "../Pages/Review/EditReview";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
const router = createBrowserRouter([
    {
        path: '/', element: <Layout></Layout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/services', loader: async () => {
                    return fetch('https://services-server-nu.vercel.app/all-services');
                }, element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
            },
            { path: '/add-service', element: <AddService></AddService> },
            {
                path: '/services/:id', loader: ({ params }) => {
                    return fetch(`https://services-server-nu.vercel.app/services/${params.id}`)
                }, element: <ServiceDetails></ServiceDetails>
            },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/my-reviews', element: <MyReview></MyReview> },
            { path: '/edit-reviews/:id', element: <EditReview></EditReview> },
            { path: '/login', element: <Login></Login> },
            { path: '/sign', element: <Sign></Sign> },
        ]
    }
])
export default router