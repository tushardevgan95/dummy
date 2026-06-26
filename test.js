const urls = [
  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=2076&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472207-464a4f783228?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617511470430-b384fec17820?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070&auto=format&fit=crop"
];

async function check() {
  for (let u of urls) {
    try {
      const r = await fetch(u, {method: "HEAD"});
      console.log(r.status, u);
    } catch (e) {
      console.log("error", u);
    }
  }
}
check();
