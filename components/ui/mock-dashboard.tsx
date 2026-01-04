"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { TrendingUp, Activity, Users, Zap, CheckCircle2, Clock } from "lucide-react"

export function MockDashboard() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
      
      <div className="relative space-y-4">
        {/* Top stats row */}
        <div className="grid grid-cols-2 gap-3">
          <MockStatCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Performance"
            value="+127%"
            trend="up"
            delay={0.1}
          />
          <MockStatCard
            icon={<Activity className="h-4 w-4" />}
            label="Accuracy"
            value="94.2%"
            trend="stable"
            delay={0.2}
          />
        </div>

        {/* Activity list */}
        <Card className="glass-card p-4 border border-border/50 backdrop-blur-xl bg-card/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-foreground">Recent Activity</h4>
            <Badge variant="secondary" className="text-xs">Live</Badge>
          </div>
          <div className="space-y-2">
            <MockActivityItem label="Model training" status="complete" delay={0.3} />
            <MockActivityItem label="Data processing" status="active" delay={0.4} />
            <MockActivityItem label="Deployment queue" status="pending" delay={0.5} />
          </div>
        </Card>

        {/* Mini chart */}
        <Card className="glass-card p-4 border border-border/50 backdrop-blur-xl bg-card/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-foreground">Performance</h4>
            <span className="text-xs text-muted-foreground">Last 7 days</span>
          </div>
          <MockChart delay={0.6} />
        </Card>
      </div>
    </div>
  )
}

function MockStatCard({ icon, label, value, trend, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="glass-card p-4 border border-border/50 backdrop-blur-xl bg-card/30">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          {trend === "up" && (
            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-500 border-green-500/20">
              <TrendingUp className="h-3 w-3 mr-1" />
              12%
            </Badge>
          )}
        </div>
        <div className="mt-3">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-xl font-bold text-foreground mt-1">{value}</p>
        </div>
      </Card>
    </motion.div>
  )
}

function MockActivityItem({ label, status, delay }: any) {
  const statusConfig = {
    complete: { color: "text-green-500", icon: CheckCircle2, bg: "bg-green-500/10" },
    active: { color: "text-primary", icon: Activity, bg: "bg-primary/10" },
    pending: { color: "text-muted-foreground", icon: Clock, bg: "bg-muted/10" },
  }
  
  const config = statusConfig[status as keyof typeof statusConfig]
  const Icon = config.icon

  return (
    <motion.div
      className="flex items-center gap-3 py-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className={cn("p-1.5 rounded", config.bg)}>
        <Icon className={cn("h-3 w-3", config.color)} />
      </div>
      <span className="text-sm text-foreground flex-1">{label}</span>
      <div className="flex gap-1">
        <div className="h-1.5 w-1.5 rounded-full bg-current opacity-20" />
        <div className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
        <div className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
      </div>
    </motion.div>
  )
}

function MockChart({ delay }: { delay: number }) {
  const bars = [45, 78, 52, 88, 65, 92, 73]
  
  return (
    <div className="flex items-end justify-between gap-1.5 h-20">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-primary/20 rounded-t relative overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.8, delay: delay + i * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-primary/60" />
        </motion.div>
      ))}
    </div>
  )
}

export function MockTable() {
  return (
    <Card className="glass-card border border-border/50 backdrop-blur-xl bg-card/30 overflow-hidden">
      <div className="p-4 border-b border-border/50">
        <h4 className="text-sm font-semibold text-foreground">System Metrics</h4>
      </div>
      <div className="divide-y divide-border/50">
        <MockTableRow label="Response Time" value="127ms" status="optimal" delay={0.1} />
        <MockTableRow label="Success Rate" value="99.8%" status="optimal" delay={0.2} />
        <MockTableRow label="Active Sessions" value="1,247" status="normal" delay={0.3} />
        <MockTableRow label="Error Rate" value="0.02%" status="optimal" delay={0.4} />
      </div>
    </Card>
  )
}

function MockTableRow({ label, value, status, delay }: any) {
  return (
    <motion.div
      className="flex items-center justify-between p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">{value}</span>
        <div className={cn(
          "h-2 w-2 rounded-full",
          status === "optimal" ? "bg-green-500" : "bg-yellow-500"
        )} />
      </div>
    </motion.div>
  )
}

export function MockProgressBars() {
  const items = [
    { label: "Model Accuracy", value: 94, color: "bg-primary" },
    { label: "Data Processing", value: 78, color: "bg-blue-500" },
    { label: "System Uptime", value: 99, color: "bg-green-500" },
  ]

  return (
    <Card className="glass-card p-6 border border-border/50 backdrop-blur-xl bg-card/30">
      <h4 className="text-sm font-semibold text-foreground mb-4">Performance Metrics</h4>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-semibold text-foreground">{item.value}%</span>
            </div>
            <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full", item.color)}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
