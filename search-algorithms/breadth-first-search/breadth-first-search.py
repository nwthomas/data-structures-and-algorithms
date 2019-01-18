# Performance of O(|V| + |E|)

deep = {
    1: 2,
    3: {4: "a", "b": "c"},
    5: {6: {7: 8}},
    9: {10: {11: {12: {13: {14: {15: 16}}}}}}
}


def breadth_first(obj, item):

    # breadth_first(deep, "you")
