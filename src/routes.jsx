import Users from './pages/Users/Users'
import Products from './pages/Products/Products'
import NewUser from './pages/NewUser/NewUser'
import Analytics from './pages/Analytics/Analytics'
import Sales from './pages/Sales/Sales'
import TransAction from './pages/TransAction/TransAction'
import Reports from './pages/Reports/Reports'
import Mail from './pages/Mail/Mail'
import Feedback from './pages/Feedback/Feedback'
import Messages from './pages/Messages/Messages'
import Manage from './pages/Manage/Manage'
import Home from './pages/Home/Home'
import Product from './pages/Products/Product/Product'



const routes = [
    {path : '/' , element : <Home />},
    {path : '/users' , element : <Users />},
    {path : '/products' , element : <Products />},
    {path : '/product/:productID' , element : <Product />},
    {path : '/newuser' , element : <NewUser />},
    {path : '/analytics' , element : <Analytics />},
    {path : '/sales' , element : <Sales />},
    {path : '/transaction' , element : <TransAction />},
    {path : '/reports' , element : <Reports />},
    {path : '/mail' , element : <Mail />},
    {path : '/feedback' , element : <Feedback />},
    {path : '/messages' , element : <Messages />},
    {path : '/manage' , element : <Manage />},
]

export default routes