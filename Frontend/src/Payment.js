import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


export default function Payment() {
    return (
        <div className="h-[600px]">
            <h2 className="text-3xl text-center font-bold mt-10 tracking-tight text-gray-900 sm:text-4xl">Quick <span className="text-orange">Pay</span> </h2>
            <div className="w-full h-full flex justify-center items-center">
                <form className="flex w-3/4 sm:w-1/2 flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Student ID" />
                        </div>
                        <TextInput id="StudentID" type="text" placeholder="Enter Student ID" required shadow />
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link href="#" className="text-orange hover:underline dark:text-cyan-500">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <button type="submit" className=" transition duration-300 px-2 py-2 rounded-lg font-medium bg-orange text-white hover:bg-blue ">Submit</button>
                    <button className=" transition duration-300 px-2 py-2 rounded-lg bg-orange font-medium text-white hover:bg-blue ">Print Old E-Receipt</button>
                    <button className=" transition duration-300 px-2 py-2 rounded-lg bg-orange font-medium text-white hover:bg-blue ">Print E-Receipt</button>

                </form>
            </div>
        </div>


    );
}



