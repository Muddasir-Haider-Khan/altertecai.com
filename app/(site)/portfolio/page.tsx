"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PORTFOLIO_CATEGORIES, TESTIMONIALS } from "@/lib/constants";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/site/section-wrapper";
import { ExternalLink, Quote, Plus, Edit, Trash2, Sparkles, FolderGit2 } from "lucide-react";
import { staggerContainer } from "@/lib/animations";
import { ParticleBackground } from "@/components/ui/particle-background";
import { TechCard } from "@/components/ui/tech-card";

interface Portfolio {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  metrics: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

interface PortfolioFormData {
  title: string;
  category: string;
  tags: string;
  description: string;
  metric1Key: string;
  metric1Value: string;
  metric2Key: string;
  metric2Value: string;
  metric3Key: string;
  metric3Value: string;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(
    null
  );
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<PortfolioFormData>({
    title: "",
    category: "AI",
    tags: "",
    description: "",
    metric1Key: "",
    metric1Value: "",
    metric2Key: "",
    metric2Value: "",
    metric3Key: "",
    metric3Value: "",
  });

  useEffect(() => {
    checkAuth();
    fetchPortfolios();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsAuthenticated(false);
    }
  };

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/portfolio");
      if (response.ok) {
        const data = await response.json();
        setPortfolios(data);
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingId(null);
    setFormData({
      title: "",
      category: "AI",
      tags: "",
      description: "",
      metric1Key: "",
      metric1Value: "",
      metric2Key: "",
      metric2Value: "",
      metric3Key: "",
      metric3Value: "",
    });
    setIsFormOpen(true);
  };

  const handleEdit = (portfolio: Portfolio) => {
    setEditingId(portfolio.id);
    const metricsEntries = Object.entries(portfolio.metrics);
    setFormData({
      title: portfolio.title,
      category: portfolio.category,
      tags: portfolio.tags.join(", "),
      description: portfolio.description,
      metric1Key: metricsEntries[0]?.[0] || "",
      metric1Value: metricsEntries[0]?.[1] || "",
      metric2Key: metricsEntries[1]?.[0] || "",
      metric2Value: metricsEntries[1]?.[1] || "",
      metric3Key: metricsEntries[2]?.[0] || "",
      metric3Value: metricsEntries[2]?.[1] || "",
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this portfolio item?"))
      return;

    try {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchPortfolios();
      } else {
        alert("Failed to delete portfolio");
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      alert("Error deleting portfolio");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const metrics: Record<string, string> = {};
    if (formData.metric1Key && formData.metric1Value) {
      metrics[formData.metric1Key] = formData.metric1Value;
    }
    if (formData.metric2Key && formData.metric2Value) {
      metrics[formData.metric2Key] = formData.metric2Value;
    }
    if (formData.metric3Key && formData.metric3Value) {
      metrics[formData.metric3Key] = formData.metric3Value;
    }

    const payload = {
      title: formData.title,
      category: formData.category,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      description: formData.description,
      metrics,
    };

    try {
      const url = editingId ? `/api/portfolio/${editingId}` : "/api/portfolio";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsFormOpen(false);
        fetchPortfolios();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to save portfolio");
      }
    } catch (error) {
      console.error("Error saving portfolio:", error);
      alert("Error saving portfolio");
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden hero-gradient pt-20">
        <div className="absolute inset-0 aurora-gradient pointer-events-none" />
        <ParticleBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-4 py-1 text-base">
              <FolderGit2 className="h-4 w-4 mr-2" />
              Our Portfolio
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight">
              Success Stories
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary animate-pulse">
                From Our Clients
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              Explore real-world AI implementations that drove measurable
              business impact across industries.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper className="bg-background relative section-glow">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            {isAuthenticated && (
              <Button
                onClick={handleCreate}
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Portfolio
              </Button>
            )}
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="w-full justify-start mb-16 flex-wrap h-auto gap-4 bg-transparent p-0">
              {PORTFOLIO_CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-lg px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 transition-all data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {PORTFOLIO_CATEGORIES.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {loading ? (
                  <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
                  </div>
                ) : filteredProjects.length === 0 ? (
                  <div className="text-center py-24 text-muted-foreground border border-dashed border-white/10 rounded-3xl bg-card/20">
                    <FolderGit2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    No portfolio items found in this category.
                  </div>
                ) : (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {filteredProjects.map((project, index) => (
                      <TechCard
                        key={project.id}
                        delay={index * 0.1}
                        className="h-full group relative cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        {/* Admin Controls */}
                        {isAuthenticated && (
                          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              size="icon"
                              variant="secondary"
                              className="h-8 w-8 bg-black/50 backdrop-blur-md hover:bg-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(project);
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="destructive"
                              className="h-8 w-8"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(project.id);
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        )}

                        <div className="flex items-start justify-between mb-6">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md"
                          >
                            {project.category}
                          </Badge>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-2">
                            {Object.entries(project.metrics).slice(0, 3).map(
                              ([key, value], i) => (
                                <div key={i} className="text-center bg-white/5 rounded-lg p-2">
                                  <div className="text-lg font-bold text-primary">
                                    {value}
                                  </div>
                                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground truncate">
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-[10px] border-white/10 text-muted-foreground bg-black/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground">+{project.tags.length - 3}</Badge>
                            )}
                          </div>
                        </div>
                      </TechCard>
                    ))}
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-background/50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 blur-3xl -z-10" />

        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from real clients who achieved real results."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TechCard key={index} delay={index * 0.1} className="h-full">
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/50" />
              </div>

              <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-white/10 pt-6 mt-auto flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} @ <span className="text-primary">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </TechCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  Key Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.metrics).map(
                    ([key, value], i) => (
                      <div
                        key={i}
                        className="text-center p-4 rounded-lg bg-muted/20"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize mt-1">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Create/Edit Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit" : "Add"} Portfolio Item
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the portfolio item.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PORTFOLIO_CATEGORIES.filter((c) => c !== "All").map(
                      (cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  placeholder="e.g., Healthcare, AI, NLP"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  rows={4}
                />
              </div>

              <div className="grid gap-4">
                <Label>Metrics (3 key-value pairs)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Key (e.g., accuracy)"
                    value={formData.metric1Key}
                    onChange={(e) =>
                      setFormData({ ...formData, metric1Key: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Value (e.g., 94%)"
                    value={formData.metric1Value}
                    onChange={(e) =>
                      setFormData({ ...formData, metric1Value: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Key (e.g., time)"
                    value={formData.metric2Key}
                    onChange={(e) =>
                      setFormData({ ...formData, metric2Key: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Value (e.g., 40% faster)"
                    value={formData.metric2Value}
                    onChange={(e) =>
                      setFormData({ ...formData, metric2Value: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Key (e.g., satisfaction)"
                    value={formData.metric3Key}
                    onChange={(e) =>
                      setFormData({ ...formData, metric3Key: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Value (e.g., 4.8/5)"
                    value={formData.metric3Value}
                    onChange={(e) =>
                      setFormData({ ...formData, metric3Value: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                {editingId ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
