from datetime import datetime, timezone
from enum import Enum
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl

app = FastAPI(title="Digital Marketing Bot API", version="0.1.0")

class Status(str, Enum):
    draft = "draft"
    queued = "queued"
    pending = "pending"
    approved = "approved"
    rejected = "rejected"
    failed = "failed"

class ProductIn(BaseModel):
    name: str
    category: str
    price: Optional[str] = None
    description: Optional[str] = None
    purchase_url: Optional[HttpUrl] = None

class GroupIn(BaseModel):
    name: str
    url: HttpUrl
    category: str
    rules_notes: Optional[str] = None

class PostIn(BaseModel):
    product_name: str
    group_name: str
    caption: str
    status: Status = Status.draft

# Demo in-memory stores. Replace with PostgreSQL in production.
products = []
groups = []
posts = []

@app.get("/health")
def health():
    return {"ok": True, "service": "digital-marketing-bot"}

@app.get("/api/products")
def list_products():
    return products

@app.post("/api/products")
def create_product(item: ProductIn):
    data = item.model_dump(mode="json")
    data["id"] = len(products) + 1
    products.append(data)
    return data

@app.get("/api/groups")
def list_groups():
    return groups

@app.post("/api/groups")
def create_group(item: GroupIn):
    data = item.model_dump(mode="json")
    data.update({"id": len(groups) + 1, "review_status": "needs_review"})
    groups.append(data)
    return data

@app.get("/api/posts")
def list_posts(status: Optional[Status] = None):
    return [p for p in posts if status is None or p["status"] == status]

@app.post("/api/posts")
def create_post(item: PostIn):
    data = item.model_dump()
    data.update({"id": len(posts) + 1, "created_at": datetime.now(timezone.utc).isoformat()})
    posts.append(data)
    return data

@app.post("/api/posts/{post_id}/status")
def update_post_status(post_id: int, status: Status):
    for post in posts:
        if post["id"] == post_id:
            post["status"] = status
            return post
    return {"error": "post_not_found"}

@app.get("/api/pending")
def pending_posts():
    return [p for p in posts if p["status"] == Status.pending]
