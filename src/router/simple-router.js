import React from 'react'
import {Switch,Route} from 'react-router-dom'

// auth
import ConfirmMail from '../views/dashboard/auth/confirm-mail'
import LockScreen from '../views/dashboard/auth/lock-screen'
import Recoverpw from '../views/dashboard/auth/recoverpw'
import SignIn from '../views/dashboard/auth/sign-in'
import SignUp from '../views/dashboard/auth/sign-up'
// errors
 

const SimpleRouter = () => {
    return (
            <>
            <Switch>

                {/* auth */}
                <Route exact path="/auth/confirm-mail" component={ConfirmMail}/>
                <Route exact path="/auth/lock-screen"  component={LockScreen}/>
                <Route exact path="/auth/recoverpw"    component={Recoverpw}/>
                <Route exact path="/auth/sign-in"      component={SignIn}/>
                <Route exact path="/auth/sign-up"      component={SignUp}/>  
                <Route exact path="/ath/sign-up"      component={SignUp}/>  
     
            </Switch>
               
            </>
    )
}

export default SimpleRouter
