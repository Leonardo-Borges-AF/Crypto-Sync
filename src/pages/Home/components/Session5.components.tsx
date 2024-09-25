import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { get as _get } from 'lodash'
import { useForm } from 'react-hook-form' // Import useForm
import toast from 'react-hot-toast'
import { TailSpin } from 'react-loader-spinner'
import { postSubscriptions } from '~/apis/beehiiv'
import { BackgroundDashed } from '~/components/BackgroundDashed.component'
import { Yup } from '~/utils/formValidators/yupSetLocale'

export const Session5 = () => {
  type TForm = {
    email: string
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  })

  const { register, handleSubmit, reset, formState } = useForm<TForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  })

  async function woosalSubmit(data: TForm) {
    mutate({
      body: {
        email: data.email,
      },
    })
  }
  const { mutate, isPending } = useMutation({
    mutationFn: postSubscriptions,
    onSuccess: () => {
      toast.success('Subscribed successfully!', {
        position: 'top-right',
      })
      reset()
    },
    onError: (error) => {
      reset()
      console.log(error)
    },
  })

  //   <input
  //   type="text"
  //   placeholder="Name"
  //   className="bg-white border relative border-black border-opacity-20 items-center px-[38px] py-4 text-black rounded-[10px]"
  // />

  return (
    <>
      <div id="news" className="bg-[#050505]">
        <div className=" relative max-w-[1280px] mx-auto ">
          <BackgroundDashed />
          <div className="flex flex-col md:py-20 relative z-20 gap-9 items-center md:px-0 px-4">
            <div className='flex flex-col items-center'>
              <p className="font-main font-semibold text-[34px] text-center text-white">
                Join The <span className='text-[#6438F4]'>SYNC</span> Newsletter
              </p>
              <p className="fomt-main text-xl text-center text-white leading-8">
                Subscribe to receive free weekly reports straight to your inbox
              </p>
            </div>
            
            <div className="flex gap-6">
              <form
                onSubmit={handleSubmit(woosalSubmit)}
                className="flex md:m-auto gap-6 items-center"
              >
                <input
                  type="text"
                  id="email"
                  placeholder="E-mail"
                  className="bg-white border border-black border-opacity-20 items-center md:px-[38px]  md:py-4 text-black rounded-[10px] md:w-fit md:h-fit w-52
                   h-16"
                  {...register('email')}
                />
                {formState.errors.email && (
                  <p className="text-red-500 text-sm absolute bottom-[40px]">
                    {_get(formState.errors, 'email.message')}
                  </p>
                )}

                <a href="#questions">
                  <button
                    className="bg-[#6438F4] md:px-[38px] py-4items-center text-white font-main font-extrabold text-center rounded-3xl md:py-4 transition-all duration-500 ease-in-out hover:rounded-lg"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <span className="mx-auto flex gap-4">
                        <TailSpin
                          visible={true}
                          height="20"
                          width="20"
                          color="#fff"
                          radius="1"
                        />
                        SIGN UP
                      </span>
                    ) : (
                      <span className="mx-auto">SIGN UP</span>
                    )}
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// function useForm<T>(arg0: { mode: string; resolver: any; }): { register: any; handleSubmit: any; reset: any; formState: any; } {
//     throw new Error('Function not implemented.');
// }
// function yupResolver(schema: Yup.ObjectSchema<{ email: string; }, Yup.AnyObject, { email: undefined; }, "">) {
//     throw new Error('Function not implemented.');
// }
