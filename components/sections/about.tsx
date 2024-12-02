"use client";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import {
    Calendar,
    Clock,
    MapPin,
    Video,
    MessageSquare,
    Users,
} from "lucide-react";
import {
    Expandable,
    ExpandableCard,
    ExpandableCardHeader,
    ExpandableTrigger,
    ExpandableCardContent,
    ExpandableCardFooter,
    ExpandableContent,
} from "../ui/expandable";
import useIsMobile from "@/hooks/is-mobile";

export function About() {
    const isMobile = useIsMobile();

    const width = isMobile ? 350 : 500;
    return (
        <Expandable
            expandDirection="both"
            expandBehavior="replace"
            initialDelay={0.2}
            onExpandStart={() => console.log("Expanding about me card...")}
            onExpandEnd={() => console.log("About me card expanded!")}
        >
            {({ isExpanded }) => (
                <ExpandableTrigger>
                    <ExpandableCard
                        className="w-full relative"
                        collapsedSize={{ width, height: 240 }}
                        expandedSize={{ width, height: 480 }}
                        hoverToExpand={false}
                        expandDelay={200}
                        collapseDelay={500}
                    >
                        <ExpandableCardHeader>
                            <div className="flex justify-between items-start w-full">
                                <div>
                                    <Badge
                                        variant="secondary"
                                        className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-100 mb-2"
                                    >
                                        About Me
                                    </Badge>
                                    <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                                        John Doe
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        Full-Stack Developer | Tech Enthusiast
                                    </p>
                                </div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="h-8 w-8"
                                            >
                                                <Calendar className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Portfolio</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </ExpandableCardHeader>

                        <ExpandableCardContent>
                            <div className="flex flex-col items-start justify-between mb-4">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>Available: 9:00AM → 6:00PM</span>
                                </div>

                                <ExpandableContent preset="blur-md">
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span>Iloilo City, Philippines</span>
                                    </div>
                                </ExpandableContent>
                            </div>
                            <ExpandableContent
                                preset="blur-md"
                                stagger
                                staggerChildren={0.2}
                            >
                                <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                                    Hi! I'm John, a full-stack developer with a
                                    passion for creating intuitive, responsive
                                    web applications. When I'm not coding, I
                                    enjoy photography, traveling, and exploring
                                    new technologies.
                                </p>
                                <div className="mb-4">
                                    <h4 className="font-medium text-sm text-gray-800 dark:text-gray-100 mb-2 flex items-center">
                                        <Users className="h-4 w-4 mr-2" />
                                        Skills:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "JavaScript",
                                            "React",
                                            "Node.js",
                                            "Tailwind CSS",
                                        ].map((skill, index) => (
                                            <Badge
                                                key={index}
                                                variant="outline"
                                                className="px-2 py-1"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        <Video className="h-4 w-4 mr-2" />
                                        Schedule a Call
                                    </Button>
                                    {isExpanded && (
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            <MessageSquare className="h-4 w-4 mr-2" />
                                            Send a Message
                                        </Button>
                                    )}
                                </div>
                            </ExpandableContent>
                        </ExpandableCardContent>
                        <ExpandableCardFooter>
                            <div className="flex items-center justify-between w-full text-sm text-gray-600 dark:text-gray-300">
                                <span>Let’s Connect!</span>
                                <span>Updated: Dec 2024</span>
                            </div>
                        </ExpandableCardFooter>
                    </ExpandableCard>
                </ExpandableTrigger>
            )}
        </Expandable>
    );
}
