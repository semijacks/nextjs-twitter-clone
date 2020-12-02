import { createServer, Model, Factory, trait } from "miragejs";
import { add, parseISO } from "date-fns";
import faker, { image, name, internet, lorem } from "faker";

faker.seed(123);

let startingDate = parseISO("2020-01-14");
let server = createServer({
  timing: 1000,
  models: {
    tweet: Model,
  },

  factories: {
    tweet: Factory.extend({
      name() {
        return name.findName();
      },

      username() {
        return internet.userName();
      },

      text() {
        return lorem.sentence();
      },

      avatarUrl() {
        return image.image();
      },

      date(i) {
        return add(startingDate, { days: i }).toISOString();
      },

      fromSem: trait({
        name: "Semilore Idowu",
        username: "semijacks",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1250768087303020550/NG846JtU_400x400.jpg",
      }),
    }),
  },

  routes() {
    this.passthrough((request) => {
      if (request.url === "/_next/static/development/_devPagesManifest.json")
        return true;
    });
    this.namespace = "api";
    this.get("tweets");

    // this.passthrough();
  },

  seeds(server) {
    server.create("tweet", "fromSem", { text: "just setting up my twttr" });
    server.create("tweet", "fromSem", { text: "Hi" });
    server.create("tweet", "fromSem", {
      text: "I still don't understand useEffect",
    });
    server.createList("tweet", 50);
  },
});

// setInterval(() => {
//   server.create("tweet");
// }, 5000);
