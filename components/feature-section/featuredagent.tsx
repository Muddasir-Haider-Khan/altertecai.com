"use client"
import { useState, useRef } from "react"
import Wrapper from "./wrapper"
import { ArrowRight } from "lucide-react" // Using lucide-react instead of react-icons for consistency
import Image from "next/image"
import Link from "next/link"

const agent1 = "/agent1.png"
const agent2 = "/agent2.png"
const agent3 = "/agent3.png"
const agent4 = "/agent4.png"

export const data = [
  {
    slug: "email-response-agent",
    header: "Email Response Agent",
    desc: "This agent automates email management by categorizing, filtering, and drafting responses. It saves time by replying to common inquiries. The AI learns from previous responses to improve accuracy. It ensures timely follow-ups and escalation of urgent matters, making communication more efficient and seamless.",
    image: agent1,
  },
  {
    slug: "travel-planner-agent",
    header: "Travel Planner Agent",
    desc: "The Travel Planner Agent assists users in planning their trips, recommending destinations based on preferences. It helps in booking flights, hotels, and activities. The agent tracks pricing trends for cost-efficient travel. It also offers real-time updates and alternative suggestions in case of disruptions.",
    image: agent2,
  },
  {
    slug: "data-analysis-agent",
    header: "Data Analysis Agent",
    desc: "This agent processes large datasets and extracts meaningful insights. It visualizes data trends to simplify decision-making. It can run predictive analytics and generate reports. Additionally, it helps businesses identify patterns and optimize strategies for better outcomes.",
    image: agent3,
  },
  {
    slug: "customer-support-agent",
    header: "Customer Support Agent",
    desc: "This AI agent is designed to handle customer inquiries 24/7. It provides quick answers to frequently asked questions and can resolve simple issues independently. For more complex problems, it escalates to a human agent. Its continuous learning ensures improved accuracy over time, enhancing customer satisfaction.",
    image: agent4,
  },
]

const FeaturedAgent = () => {
  const [selecteditem, setSelecteditem] = useState("email-response-agent")
  const selecteditemdata = data.find((item) => item.slug === selecteditem)
  const detailCardRef = useRef<HTMLDivElement>(null)

  const handleSelectItem = (slug: string) => {
    setSelecteditem(slug)
    if (window.innerWidth < 768 && detailCardRef.current) {
      detailCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="bg-background text-foreground py-12">
      <Wrapper>
        <div>
          <div className="flex gap-2">
            <h1 className="text-3xl md:text-4xl text-center mx-auto font-extrabold">Featured AI Agents</h1>
          </div>
          <p className="mt-4 max-w-screen-sm text-base text-center mx-auto text-foreground">
            Explore powerful AI agents that enhance your key features. Automate tasks, optimize workflows, and improve
            user experiences. Designed to adapt and evolve with your specific needs.
          </p>
        </div>
        <div className="flex mt-8 gap-x-6 mx-auto gap-y-8 flex-col-reverse md:flex-row text-center bg-card border-border text-foreground">
          {/* Left Content */}
          <div
            ref={detailCardRef}
            className="bg-card text-card-foreground basis-8/12 self-start sticky top-36 border border-border rounded-xl py-16 px-6 card-hover"
          >
            <h4 className="text-primary font-medium mt-6 lg:mt-0">Specialized AI Agents</h4>
            <h2 className="font-bold text-foreground text-2xl">{selecteditemdata?.header}</h2>
            <p className="text-base mt-3 text-foreground">{selecteditemdata?.desc}</p>
            <Link href="/contact">
              <button className="text-xl mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-x-2">
                View Details
                <ArrowRight className="text-lg" />
              </button>
            </Link>
          </div>
          {/* Right Content */}
          <div className="px-4 py-6 flex flex-col space-y-3 basis-4/12">
            {data.map((item) => (
              <div
                onClick={() => handleSelectItem(item.slug)}
                className={`card-hover flex gap-x-4 cursor-pointer items-center p-3 rounded-md ${
                  selecteditem === item.slug ? "bg-card/80 border border-primary/50" : "bg-card/40 hover:bg-card/60"
                }`}
                key={item.slug}
              >
                <div className="flex-shrink-0 h-24 w-36">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.header}
                    width={144}
                    height={96}
                    className="h-24 w-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-muted-foreground font-medium text-sm">Specialized AI Agents</h4>
                  <h3 className="font-bold text-sm text-foreground">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FeaturedAgent
