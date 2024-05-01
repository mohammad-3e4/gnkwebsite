import AdminPageLayout from "./AdminPageLayout"
import DefaultContent from "./DefaultContent"

export default function AdminPage (){
    return (
        <div className="block sm:flex lg:mt-10">
        <div className="fixed sm:relative"><AdminPageLayout /></div>          
            
            <div className="p-4  z-0 w-full   sm:h-auto">
                <div className="p-4 border-2 border-gray-200 h-full  border-dashed rounded-lg dark:border-gray-700">
                    <div className="flex items-center justify-center h-full   rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl  text-gray-400 dark:text-gray-500">
                            <DefaultContent />
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
