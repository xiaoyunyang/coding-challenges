import { sort } from "ramda";
import MinHeap from "../MinHeap";

// get random int between 0 and max-1
const getRandomInt = (max) =>
    Math.floor(Math.random() * Math.floor(max));

// Fisher-Yates Shuffle
const shuffle = (arr) => {
    const a = [...arr];

    function swap(i, j) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    let j = 0;
    for (let i = 0; i < arr.length - 2; i += 1) {
        j = getRandomInt(i);
        swap(i, j);
    }
    return a;
};

const verifyInvariant = (heapArr, currInd) => {
    if (heapArr.length < 2) return true;

    const curr = heapArr[currInd];
    const leftChildInd = currInd * 2;
    const rightChildInd = (currInd * 2) + 1;
    const leftChild = heapArr[leftChildInd];
    const rightChild = heapArr[rightChildInd];

    if (!leftChild && !rightChild) return true;
    let leftHeapValid = true;
    let rightHeapValid = true;
    if (leftChild) {
        if (leftChild.priority < curr.priority) return false;
        leftHeapValid = verifyInvariant(heapArr, leftChildInd);
    }
    if (rightChild) {
        if (rightChild.priority < curr.priority) return false;
        rightHeapValid = verifyInvariant(heapArr, leftChildInd);
    }

    return leftHeapValid && rightHeapValid;
};

describe("verifyInvariant", () => {
    it("should verify min heap properties correctly for not a min heap", () => {
        const heap = [
            { val: "a", priority: 0 },
            { val: "a", priority: 12 },
            { val: "a", priority: 13 },
            { val: "a", priority: 1 }
        ];
        expect(verifyInvariant(heap, 1)).toBe(false);
    });
    it("should verify min heap properties correctly for a min heap", () => {
        const heap = [
            { val: "a", priority: 0 },
            { val: "a", priority: 1 },
            { val: "a", priority: 2 },
            { val: "a", priority: 3 }
        ];
        expect(verifyInvariant(heap, 1)).toBe(true);
    });
});

describe("MinHeap", () => {
    describe("Insert and remove randomized testing", () => {
        
        const elems = [
            { val: "a", priority: 0 },
            { val: "a1", priority: 0 },
            { val: "b", priority: 1 },
            { val: "c", priority: 2 },
            { val: "c1", priority: 2 },
            { val: "d", priority: 3 },
            { val: "e", priority: 4 },
            { val: "f", priority: 5 }
        ];
        
        // create 1000 tests using shuffled elems
        const testCases = Array(100).fill(shuffle(elems));

        for(let i=0; i<testCases.length; i+=1) {
            console.log(`Test ${i}`, JSON.stringify(testCases, null, 2))
            const testCase = testCases[i];
            const h = new MinHeap();
            let mins = [];
            test.each(
                testCase
            )(`test #${i} maintain min heap invariant after inserting element %o`, (elem) => {
                h.insert(elem);
                expect(verifyInvariant(h.getHeap(), 1)).toBe(true);
            });
    
            test.each(
                testCase
            )(`test #${i} maintain min heap invariant after removing element`, () => {
                const min = h.deleteMin();
                mins = mins.concat(min);
                expect(verifyInvariant(h.getHeap(), 1)).toBe(true);
            });
    
            it(`test #${i} should remove min priority element from heap`, () => {
                const prios = mins.map(min => (min && min.priority));
                const sortBy = (a, b) => a - b;
                expect(prios).toEqual(sort(sortBy, prios));
            });
        }
    });

    describe("Edge Cases", () => {
        let h;
        let mins;

        beforeEach(() => {
            h = new MinHeap();
            mins = [];
        });
        it("should remove in the same order as insertion for elements of same priority", () => {
            const elems = [
                { val: "a", priority: 0 },
                { val: "a1", priority: 0 },
                { val: "a2", priority: 0 }
            ];

            elems.forEach(elem => h.insert(elem));
            for (let i = 0; i < elems.length; i += 1) {
                mins = mins.concat(h.deleteMin());
            }
            expect(mins).toEqual(elems);
        });
        it("should return undefined if deleting min from empty heap", () => {
            const min = h.deleteMin();
            expect(min).toBe(undefined);
        });
        it("should return undefined when getMin from empty heap", () => {
            expect(h.getMin()).toBe(undefined);
        });
    });
});