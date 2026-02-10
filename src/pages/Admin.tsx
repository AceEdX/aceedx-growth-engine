import { useState } from "react";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts as initialPosts, categories, type BlogPost } from "@/data/blogPosts";
import { useBlogStore } from "@/stores/blogStore";

const emptyPost: Omit<BlogPost, "id"> = {
  slug: "",
  title: "",
  excerpt: "",
  category: "EdTech",
  author: "AceEdX Editorial",
  date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
  readTime: "5 min read",
  featured: false,
  tags: [],
  content: "",
};

const Admin = () => {
  const { posts, addPost, removePost, updatePost } = useBlogStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyPost);
  const [tagsInput, setTagsInput] = useState("");

  const handleSaveNew = () => {
    if (!form.title.trim() || !form.content.trim()) return;
    const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    addPost({
      ...form,
      slug,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
    });
    setForm(emptyPost);
    setTagsInput("");
    setShowForm(false);
  };

  const handleUpdate = (post: BlogPost) => {
    updatePost(post.id, {
      ...post,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
    });
    setEditingId(null);
  };

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setTagsInput(post.tags.join(", "));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="border-b border-border bg-card py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">Blog Admin</h1>
              <p className="text-sm text-muted-foreground mt-1">Add, edit, or remove blog posts</p>
            </div>
            <button
              onClick={() => { setShowForm(!showForm); setForm(emptyPost); setTagsInput(""); }}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              New Post
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* New post form */}
        {showForm && (
          <div className="mb-8 rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-bold text-foreground">Create New Post</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">Title *</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Slug</label>
                <input
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="auto-generated-from-title"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.filter((c) => c !== "All").map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Author</label>
                <input
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Read Time</label>
                <input
                  value={form.readTime}
                  onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">Tags (comma separated)</label>
                <input
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="education, admissions, AI"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">Excerpt *</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Short summary of the article"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">Content * (Markdown)</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={10}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="## Heading&#10;&#10;Your content here..."
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  className="rounded border-input"
                />
                <label className="text-sm text-foreground">Featured</label>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleSaveNew}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Save className="h-4 w-4" />
                Publish Post
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/80"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Posts list */}
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{post.category}</span>
                  {post.featured && <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">Featured</span>}
                </div>
                <h3 className="text-sm font-semibold text-foreground truncate">{post.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{post.date} · {post.readTime}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => removePost(post.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                  aria-label="Delete post"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">No posts yet. Click "New Post" to create one!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
