import { Router } from "worktop";
import * as Cache from 'worktop/cache';

const API = new Router();

API.add("GET", "/:id", async (req, res) => {
  const id = req.params.id;

  res.setHeader("Cache-Control", "public, max-age=60");
  res.send(200, JSON.stringify({ id }));
});

Cache.listen(API.run);
