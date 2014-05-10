bffmt
=====

Like Gofmt, but for Brainfuck.

Turns unmaintainable, inhumane code such as this: 

    > cat fib.b

    >++++++++++>+>+[[+++++[>++++++++<-]>.<++++++[>--------<-]+<<<]>.>>[[-]<[>+<-]>>[
    <<+>+>-]<[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>+<-[>[-]>+>+<<<-[>+<-]]]]]]]]
    ]]]+>>>]<<<]

Into super colleague-friendly, high quality why-aren't-you-the-cto-yet code like this:

    > node bffmt.js < fib.b

    >++++++++++>+>+[
      [
        +++++[
          >++++++++<-
        ]>.<++++++[
          >--------<-
        ]+<<<
      ]>.>>[
        [
          -
        ]<[
          >+<-
        ]>>[
          <<+>+>-
        ]<[
          >+<-[
            >+<-[
              >+<-[
                >+<-[
                  >+<-[
                    >+<-[
                      >+<-[
                        >+<-[
                          >+<-[
                            >[
                              -
                            ]>+>+<<<-[
                              >+<-
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]+>>>
      ]<<<
    ]


Acknowledgements
----------------
fib.b stolen from [Daniel B Cristofani](http://www.hevanet.com/cristofd/brainfuck/), stripped from its already-pretty-humane layout by yours truly for demonstration purposes. 