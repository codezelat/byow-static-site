## Performance Rationale

### Benchmarking Impracticality

Measuring the performance improvement of replacing `document.getElementById` with React `useRef` for a click event handler is impractical using standard benchmarking tools for the following reasons:

1.  **Microscopic Impact:** The time difference between a DOM query (which is very fast in modern browsers) and a property access is in the order of microseconds or nanoseconds. This is far below the noise floor of typical browser performance profiling, especially when dominated by React's reconciliation and event handling overhead.
2.  **User Interaction Context:** This optimization affects a `mousedown` event handler. The latency introduced by the network, rendering updates, and human reaction time dwarfs the execution time of the selector.
3.  **Lack of Infrastructure:** The project does not have an existing setup for micro-benchmarking React component internals. Setting up such infrastructure solely for this change would be disproportionate to the benefit.

### Architectural Improvement

Despite the difficulty in measuring raw speedup, this change is a **net performance improvement** and architectural win because:

1.  **Avoids DOM Traversal:** `document.getElementById` requires the browser to look up an element in the DOM tree (or a hash map). `useRef` provides direct access to the underlying DOM node without any lookup.
2.  **React Idiomatic:** Accessing the DOM directly via the global `document` object bypasses React's virtual DOM abstraction. Using refs is the standard, idiomatic way to access DOM nodes in React, ensuring better compatibility with React's lifecycle and potential concurrent mode features.
3.  **Maintainability:** Relying on string IDs can lead to collisions or broken references if IDs are changed or duplicated. Refs are scoped to the component instance, making the component more reusable and robust.
