export default {
    functional: true,
    render: (h,ctx)=>{
        return ctx.scopedSlots.fcc && ctx.scopedSlots.fcc(ctx.props || {})
    }
}