import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import toast, { } from 'react-hot-toast';
import UseTitle from '../../TitleHook/TitleHook';

const AddService = () => {
    // title set 
    UseTitle('Add Service')

    // handle service add 
    const handleService = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const price = from.price.value + '$';
        const rating = from.rating.value;
        const description = from.description.value;
        // all object 
        const service = {
            service_name: name,
            img: photo,
            price: price,
            rating: rating,
            description: description
        }
        fetch('https://services-server-nu.vercel.app/all-services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Successfully Added!')

                }
            })
            .catch(error => console.log(error))
        from.reset()
    }
    return (
        <div>
            {/* add service  */}
            <div className="my-6 w-4/5  lg:w-2/5 mx-auto border py-7 px-3">
                <form onSubmit={handleService} className="flex flex-col gap-4 ">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Service Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Service Name"
                            required={true}
                            name='name'
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo"
                                value="Service Photo URL"
                            />
                        </div>
                        <TextInput
                            id="photo"
                            type="text"
                            placeholder="Service Photo URL"
                            required={true}
                            name='photo'
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="Service Fee"
                            />
                        </div>
                        <TextInput
                            id="price"
                            type="text"
                            placeholder="Service Fee"
                            required={true}
                            name='price'
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="rating"
                                value="Rating"
                            />
                        </div>
                        <TextInput
                            id="rating"
                            type="text"
                            placeholder="Rating"
                            required={true}
                            name='rating'
                        />
                    </div>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Description"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Description..."
                            required={true}
                            rows={4}
                            name='description'
                        />
                    </div>
                    <Button type="submit" className='bg-green-900'>
                        Submit
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default AddService;