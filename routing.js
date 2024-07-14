function findRoutes(t, e, n) {
    const a = (e, n) => {
        for (const a of t.doublelines) if (a.includes(e) && a.includes(n)) return !0;
        return !1
    },
        s = (t, e, i, m = null) => {
            if (t !== n) for (const n of r[t]) {
                const r = n.name;
                if (m && a(m, r)) continue;
                const o = l[r];
                for (let n = o.indexOf(t) + 1; n < o.length; n++) {
                    const a = o[n];
                    i.has(a) ||
                        (
                            i.add(a),
                            e.length &&
                                e[e.length - 1].line === r ? e[e.length - 1].stations.push(a) : e.push({
                                    line: r,
                                    stations: [
                                        t,
                                        a
                                    ]
                                }),
                            s(a, e, i, r),
                            i.delete(a),
                            e.length &&
                            e[e.length - 1].stations[e[e.length - 1].stations.length - 1] === a &&
                            (
                                2 === e[e.length - 1].stations.length ? e.pop() : e[e.length - 1].stations.pop()
                            )
                        )
                }
            } else o.push([...e])
        },
        r = t.stations.reduce(((t, e) => (t[e.name] = e.lines, t)), {
        }),
        l = t.lines.reduce(((t, e) => (t[e.name] = e.stations, t)), {
        }),
        o = [];
    return s(e, [], new Set([e])),
        o
}
function getTravelTime(t, e) {
    let n,
        a;
    t.localeCompare(e) > 0 ? (n = e, a = t) : (n = t, a = e);
    for (const s of network.traveltimes) if (s.start == n && s.end == a) return s.time
}
function filterArrayByBounds(t, e, n) {
    let a = t.indexOf(e),
        s = t.indexOf(n);
    return - 1 === a ||
        - 1 === s ? [] : t.slice(a, s + 1)
}
function getStops(t, e, n) {
    let a;
    for (const s of network.lines) s.name == n &&
        (a = s.stations);
    return filterArrayByBounds(a, t, e)
}
function getTravelTimeForStops(t) {
    let e = 0;
    for (var n = 0; n < t.length - 1; n++) e += getTravelTime(t[n], t[n + 1]);
    return e
}
function getPlatformOfStop(t, e) {
    let n;
    for (const a of network.stations) a.name == t &&
        (n = a);
    for (a = 0; a < n.lines.length; a++) if (n.lines[a].name == e) return n.lines[a].platform
}
