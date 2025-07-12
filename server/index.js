// server/index.js
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';


dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
app.get('/api/blogs', async (req, res) => {
  try {
    await client.connect();
    const blogs = await client.db('devfolio').collection('blogs').find().toArray();
    res.json(blogs); // ✅ This ensures clean JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;
 
  try {
    await client.connect();

    const result = await client
      .db('devfolio')
      .collection('blogs')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      
      res.status(200).json({ message: 'Blog deleted successfully' });
    } else {
      console.log("⚠️ Blog not found:", id);
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    console.error("❌ Error deleting blog:", error.message);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});


app.post('/api/blogs', async (req, res) => {
  try {
    await client.connect();
    const blog = req.body;
if (typeof blog.tags === 'string') {
  blog.tags = blog.tags.split(',').map(tag => tag.trim());
}
await client.db('devfolio').collection('blogs').insertOne(blog);
    res.status(201).json({ message: 'Blog created' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
