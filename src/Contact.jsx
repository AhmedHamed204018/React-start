import React from 'react'
import {useForm} from 'react-hook-form'
import { register } from 'react-scroll/modules/mixins/scroller'

export default function Contact() {

  const {
    register,
    handleSubmit,
    formState:{errors},
    reset,
    trigger
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data)
    reset()
  }
  
  console.log(errors)


  return (
    <div>
      <div className="container text-center p-5" id='contact'>
        <h1 className=' title-2 m-4'>CONTACT ME</h1>
          <div className='divider-custom divider-line'>
            <div className="divider-custom-line-port"></div>
            <div className="divider-custom-icon">
            <i class="fa-solid fa-star port-ico fa-2xl"></i>
                  </div>
            <div className="divider-custom-line-port"></div>
            
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
                <form id='contactForm' name='sentMessage' onSubmit={handleSubmit(onSubmit)}>
                    <div className="control-group">
                    <div className="form-group">
                      <label>Name</label>
                        <input  id='name' className={`form-control ${errors.name && 'invalid'}`}
                         type='text'
                         placeholder='Name'
                        {...register('name',{required:"name is required" })}
                        onKeyUp ={()=>{
                          trigger('name')
                        }}
                        />
                        {errors.name &&(<p className='help-block text-danger'>{errors.name.message}</p>)}
                        
                    </div>
                    </div>

                    <div className="control-group">
                    <div className="form-group">
                      <label>Email Address</label>
                        <input className={`form-control ${errors.email && 'invalid'}`} id='email' type='email' placeholder='Email'
                        {...register('email',{required:"email is required",
                        pattern:{
                          value: /^[A-z0-9._%+-]+@[A-Z]{2,}$/i,
                          message:'invalid email address'
                        }})}
                        onKeyUp ={()=>{
                          trigger('email')
                        }}
                        />
                        {errors.email &&(<p className='help-block text-danger'>{errors.email.message}</p>)}
                    </div>
                    </div>


                    <div className="control-group">
                    <div className="form-group">
                      <label>Phone Number </label>
                        <input className={`form-control ${errors.phone && 'invalid'}`} id='phone' type='tel' placeholder='Phone Number'
                        {...register('phone',{required:"phone is required",
                        pattern:{
                          value: /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
                          message:'invalid phone number'
                        }

                        })} 
                        onKeyUp ={()=>{
                          trigger('phone')
                        }}

                        />
                        {errors.phone &&(<p className='help-block text-danger'>{errors.phone.message}</p>)}
                        
                    </div>
                    </div>

                    <div className="control-group">
                    <div className="form-group">
                      <label>Message</label>
                        <textarea className={`form-control ${errors.message && 'invalid'}`} id='message' rows={'5'}  placeholder='Message' {...register('message',{required:"message is required",
                        minLength:{
                          value:10,
                          message:'Minmum required length is 10'
                        },
                        maxLength:{
                          value:50,
                          message:'Maxmum allowes length is 50'
                        }

                      })}
                      onKeyUp ={()=>{
                        trigger('message')
                      }}

                      ></textarea>
                        {errors.message &&(<p className='help-block text-danger'>{errors.message.message}</p>)}
                    </div>
                    </div>

                    <br/>
                     <div id="success"></div>

                     <button type="submit" class="btn btn-primary btn-lg">Send</button>


                </form>

            </div>

          </div>

          </div>

    </div>
  )
}
