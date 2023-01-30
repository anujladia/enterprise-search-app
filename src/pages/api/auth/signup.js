// import { NextApiRequest, NextApiResponse } from 'next'
// import { auth } from '@lib/firebase';

export default function handler(req, res) {
    res.status(200).json({ result: "success" });

  // if (req.method === "POST") {
  //   const { name, email, password } = req.body;

  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     name,
  //   })

  //   if (error) {
  //     res.status(404).json({ error: 'Error regiestering the user' });
  //   }

  //   if (data) {
  //     return res.status(200).json({ result: "Successfulle signed up", token: session });
  //   }
  //   res.status(200).json({ result: "success" });
  // } else {
  //   res.status(403).json({ error: 'Method not allowed' })
  // }
}
