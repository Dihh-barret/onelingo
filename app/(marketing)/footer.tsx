import { Button } from "@/components/ui/button"
import Image from "next/image"


export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">                     
                        <Image src="/ru.svg" 
                        alt="Russian" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-mb"/>Russian                    
                </Button>
                <Button size="lg" variant="ghost" className="w-full">                     
                        <Image src="/br.svg" 
                        alt="PT-BR" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-mb"/>PT-BR                   
                </Button>
                <Button size="lg" variant="ghost" className="w-full">                     
                        <Image src="/us.svg" 
                        alt="English" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-mb"/>English                   
                </Button>
                <Button size="lg" variant="ghost" className="w-full">                     
                        <Image src="/fr.svg" 
                        alt="French" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-mb"/>French                   
                </Button>
                <Button size="lg" variant="ghost" className="w-full">                     
                        <Image src="/jp.svg" 
                        alt="Japanese" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded-mb"/>Japananese                   
                </Button>
            </div>
        </footer>
    )
}