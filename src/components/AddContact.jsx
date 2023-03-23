import { useForm } from "react-hook-form";

export function AddContact() {
    const {register, handleSubmit} = useForm({
        resolver: 
    });
const handleSubmitForm = (data) => {console.log(data)};

    return (
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="mb-3">
            <label for="full_name" className="form-label">
              Full Name
            </label>
            <input {...register('full_name')} type="text" className="form-control" id="full_name" />
          </div>
  
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input {...register('email')} type="email" className="form-control" id="email" />
          </div>
  
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input {...register('phone')} type="phone" className="form-control" id="phone" />
          </div>
  
          <div className="mb-3">
            <label for="address" className="form-label">
              Mail Address
            </label>
            <input {...register('address')} type="text" className="form-control" id="address" />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }