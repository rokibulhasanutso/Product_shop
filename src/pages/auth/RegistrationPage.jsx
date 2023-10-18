import { useState } from "react";

const RegistrationPage = () => {

    const [ formAllData, setFormAllData ] = useState({
        username : undefined,
        firstName : undefined,
        lastName : undefined,
        email: undefined,
        phonenumber: undefined
    })

    // const [ formValidation, setFormValidation ] = useState({
    //     usernameError : undefined,
    //     firstNameError : undefined,
    //     lastNameError : undefined,
    //     emailError: undefined,
    //     phonenumberError: undefined
    // });

    const getFormData = newData => {
        setFormAllData(preData => ({
            ...preData,
            ...newData
        }))
    }

    const formSubmit = event => {
        event.preventDefault()

        const formValue = Object.values(formAllData).some(value => value === undefined)
        console.log(formValue)

        console.log(formAllData)
    };


    return (
        <div className="w-screen mt-10 grid place-content-center">
            <div className="">
                <div>
                    <form 
                        action="" 
                        method="post" 
                        className="space-y-6"
                        onSubmit={formSubmit}
                    >
                        <div id="user_name" className="flex justify-between items-center">
                            <label 
                                htmlFor='username' 
                                className=""
                            >
                                Username :
                            </label>
                            <input 
                                type="text" 
                                name='username'
                                className="border border-gray-400 outline-0 ms-2 px-2.5 py-1.5 rounded-md w-[280px]"
                                value={formAllData.username}
                                onChange={event => getFormData({username : event.target.value})} 
                            />
                            <span className="">{}</span>
                        </div>
                        
                        <div id="full_name" className="flex justify-between items-center">
                            <label 
                                htmlFor='first_name' 
                                className=""
                            >
                                First name :
                            </label>
                            <input 
                                type="text" 
                                name='first_name'
                                className="border border-gray-400 outline-0 ms-2 px-2.5 py-1.5 rounded-md w-[280px]"
                                value={formAllData.firstName}
                                onChange={event => getFormData({firstName: event.target.value})}
                            />
                        </div>
                        
                        <div id="last_name" className="flex justify-between items-center">
                            <label 
                                htmlFor='lastname' 
                                className=""
                            >
                                Last name :
                            </label>
                            <input 
                                type="text" 
                                name='lastname'
                                className="border border-gray-400 outline-0 ms-2 px-2.5 py-1.5 rounded-md w-[280px]"
                                value={formAllData.lastName}
                                onChange={event => getFormData({lastName: event.target.value})}
                            />
                        </div>
                        
                        <div id="email_address" className="flex justify-between items-center">
                            <label 
                                htmlFor='Email' 
                                className=""
                            >
                                Email :
                            </label>
                            <input 
                                type="text" 
                                name='Email'
                                className="border border-gray-400 outline-0 ms-2 px-2.5 py-1.5 rounded-md w-[280px]"
                                value={formAllData.email}
                                onChange={event => getFormData({email: event.target.value})}
                            />
                        </div>
                        
                        <div id="phone_number" className="flex justify-between items-center">
                            <label 
                                htmlFor='phonenumber'  
                                className=""
                            >
                                Phone number :
                            </label>
                            <input 
                                type="text" 
                                name='phonenumber'
                                className="border border-gray-400 outline-0 ms-6 px-2.5 py-1.5 rounded-md w-[280px]"
                                value={formAllData.phonenumber}
                                onChange={event => getFormData({phonenumber: event.target.value})}
                            />
                        </div>

                        <div className="text-center">
                            <input 
                                type="submit" 
                                value={'Submit'}
                                className="bg-blue-500 mt-8 cursor-pointer text-white px-6 py-2.5 rounded-md font-semibold uppercase"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;