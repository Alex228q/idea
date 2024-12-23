import { initTRPC } from "@trpc/server";

const trpc = initTRPC.create();

const ideas = [
  { nick: "nick-1", name: "Idea 1", desc: "Idea 1 desc" },
  { nick: "nick-2", name: "Idea 2", desc: "Idea 2 desc" },
  { nick: "nick-3", name: "Idea 3", desc: "Idea 3 desc" },
];

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});

export type TrpcRouter = typeof trpcRouter;
