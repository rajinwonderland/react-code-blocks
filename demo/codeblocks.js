export default {
	go: `var bytesFlag = flag.Int("bytes", 48, "maximum parameter size in bytes")

  var sizeof = (&types.StdSizes{8, 8}).Sizeof // the sizeof function
  
  func PrintHugeParams(fset *token.FileSet, info *types.Info, files []*ast.File) {
    checkTuple := func(descr string, tuple *types.Tuple) {
      for i := 0; i < tuple.Len(); i++ {
        v := tuple.At(i)
        if sz := sizeof(v.Type()); sz > int64(*bytesFlag) {
          fmt.Printf("%s: %q %s: %s = %d bytes\n",
            fset.Position(v.Pos()),
            v.Name(), descr, v.Type(), sz)
        }
      }
    }
    checkSig := func(sig *types.Signature) {
      checkTuple("parameter", sig.Params())
      checkTuple("result", sig.Results())
    }
    for _, file := range files {
      ast.Inspect(file, func(n ast.Node) bool {
        switch n := n.(type) {
        case *ast.FuncDecl:
          checkSig(info.Defs[n.Name].Type().(*types.Signature))
        case *ast.FuncLit:
          checkSig(info.Types[n.Type].Type.(*types.Signature))
        }
        return true
      })
    }
  }`,
	react: `class HelloMessage extends React.Component {
    handlePress = () => {
      alert('Hello')
    }
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <button onClick={this.handlePress}>Say Hello</button>
        </div>
      );
    }
  }

  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    mountNode
  );`,
	graphql: `
# this is a graphql code block
  query FirstSevenStarShips {
    allStarships(first: 7) {
      edges {
        node {
          id
          name
          model
          costInCredits
          pilotConnection {
            edges {
              node {
                ...pilotFragment
              }
            }
          }
        }
      }
    }
  }

  fragment pilotFragment on Person {
    name
    homeworld {
      name
    }
  }`,
	rust: `
  fn main() {
    let url = Url::parse("http://localhost:7777/").expect("fail Url::parse()");
    let mut target_url = url.join("/hello").expect("fail url join()");
    target_url.set_query(Some("hoge=fuga"));
    target_url.set_query(Some("t=zzz"));

    println!("{}", target_url);
}`
};
