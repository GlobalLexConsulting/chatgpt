import { supabase } from '@/lib/supabaseClient';
import { generatePlaceholderContent } from '@/lib/blogContentGenerator';

export const categories = [
  { value: "todos", label: "Todos" },
  { value: "llc", label: "LLC (USA)" },
  { value: "fiscalidad", label: "Fiscalidad" },
  { value: "nomada", label: "Nómadas Digitales" },
  { value: "legal", label: "Legal" },
  { value: "autonomo", label: "Autónomos" },
  { value: "slsa", label: "S.L." },
  { value: "irpf", label: "IRPF" },
  { value: "ivaigic", label: "IVA / IGIC" },
  { value: "internacional", label: "Internacional" },
  { value: "espana", label: "España" },
  { value: "cripto", label: "Cripto" },
];

export const fetchBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  
  return data.map(post => ({
    ...post,
    content: post.content || generatePlaceholderContent(post)
  }));
};

export const getPostById = async (id) => {
  const postIdInt = parseInt(id, 10);
  if (isNaN(postIdInt)) return null;

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', postIdInt)
    .single();

  if (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
  
  if (data) {
    return {
      ...data,
      content: data.content || generatePlaceholderContent(data)
    };
  }
  return null;
};

export const getLatestPosts = async (count) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false })
    .limit(count);
  
  if (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }

  if (!data) return [];
  
  return data.map(post => ({
    ...post,
    content: post.content || generatePlaceholderContent(post)
  }));
};