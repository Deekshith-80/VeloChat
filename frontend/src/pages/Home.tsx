import { Button } from "@/components/ui/button"
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/use-auth"

const Home = () => {
    const { user } = useAuth()

    if (user) return <Navigate to="/user/conversations" replace />

    return (
        <div className="relative isolate h-full overflow-hidden flex flex-col bg-background">
            <div className="ambient-canvas">
                <div className="ambient-vignette" />
                <div className="ambient-beam" />
                <div className="ambient-cloud ambient-cloud--hero" />
                <div className="ambient-cloud ambient-cloud--left" />
                <div className="ambient-cloud ambient-cloud--right" />
                <div className="ambient-cloud ambient-cloud--center" />
                <div className="ambient-cloud ambient-cloud--lower" />
                <div className="ambient-orb" />
                <div className="ambient-noise" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col space-y-8 items-center justify-center px-6">
                {/* title */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center rounded-full border border-white/12 bg-white/7 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground backdrop-blur-xl shadow-[0_0_32px_rgba(16,185,129,0.16)]">
                        Premium real-time messaging
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold text-6xl lg:text-8xl tracking-tight">VeloChat</h1>
                        <p className="text-lg lg:text-xl text-muted-foreground">Online chatting with a sharper, cleaner pulse.</p>
                    </div>
                </div>
                {/* action buttons */}
                <div className="flex items-center gap-2">
                    <Link to="/login">
                        <Button className="p-4 lg:p-6 text-base lg:text-xl" size={"lg"} variant={"secondary"}>
                            Login
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button size={"lg"} className="p-4 lg:p-6 text-base lg:text-xl bg-primary/90 hover:bg-primary">
                            Signup
                        </Button>
                    </Link>
                </div>
            </div>
            {/* footer */}
            <div className="relative z-10 p-4">
                <p className="text-center text-sm lg:text-base text-muted-foreground">
                    © 2026 VeloChat. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Home
