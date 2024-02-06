abstract class DbQuery {
  abstract find(id: string): DbQuery;
  abstract where(arg: object): DbQuery;
}

class Moongoose extends DbQuery {
  find(id: string) {
    console.log(`QUERYING DB WITH:::: ${id}`);
    return new Moongoose();
  }

  where(arg: { id: string }) {
    console.log(`QUERYING DB WITH:::: ${JSON.stringify(arg)}`);
    return new Moongoose();
  }
}

const User = new Moongoose();

User.find('1001');
