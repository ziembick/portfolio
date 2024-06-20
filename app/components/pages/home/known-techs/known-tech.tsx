import { CMSIcon } from "@/app/components/cms-icon"
import { KnownTech as IKnownTech} from "@/app/types/projects"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"


type KnownTechProps = {
    tech: IKnownTech
}

export const KnownTech = ({tech}: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR',).replace('há ', "")
    return (
        <div className="font-mono p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-customPurple hover:bg-gray-600/30 transition-all cursor-cell">
            <div className="flex items-center justify-between font-mono">
                <p className="font-mono">{tech.name}</p>
                <CMSIcon icon={tech.iconSvg}/>
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    )
}