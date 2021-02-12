// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// https://randomuser.me/api/?seed=73828835
export default async function handler(req, res) {
  if (req.query.seed) {
    await fetch(`https://randomuser.me/api/?seed=${req.query.seed}`)
      .then((res) => res.json())
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).send(`An Error occured: ${err.message}`))
  }
}
