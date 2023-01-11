import Link from 'next/link'
import * as Styled from './styled'
import { Roboto } from "@next/font/google";
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const robotoRegular = Roboto({ weight: "400", subsets: ["latin"] });

export default function Footer(){
    return(
        <Styled.Footer>
            <h3 className={robotoRegular.className}>Desenvolvido por <Link href='https://github.com/igorviniciussantana' target='_blank' className={robotoBold.className}>Igor Vinicius</Link></h3>
        </Styled.Footer>
    )
}